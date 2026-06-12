import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as os from 'os';

let lastPlayedTime = 0;

export function activate(context: vscode.ExtensionContext) {
    console.log('Faah Sound extension is now active!');

    // Register test sound command
    const testCommand = vscode.commands.registerCommand('faah-terminal-error.playTestSound', () => {
        vscode.window.showInformationMessage('Playing test Faah sound...');
        playFaahSound(context);
    });
    context.subscriptions.push(testCommand);

    // Register terminal exit listener
    const terminalListener = vscode.window.onDidEndTerminalShellExecution((event) => {
        const config = vscode.workspace.getConfiguration('faahSound');
        const enabled = config.get<boolean>('enabled', true);

        if (!enabled) {
            return;
        }

        const exitCode = event.exitCode;
        // Non-zero exit code indicates an error
        if (exitCode !== undefined && exitCode !== 0) {
            const cooldownMs = config.get<number>('cooldownMs', 1000);
            const now = Date.now();

            if (now - lastPlayedTime >= cooldownMs) {
                lastPlayedTime = now;
                playFaahSound(context);
            }
        }
    });
    context.subscriptions.push(terminalListener);
}

function playFaahSound(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('faahSound');
    let soundPath = config.get<string>('customSoundPath', '').trim();

    if (!soundPath) {
        // Fall back to default faaah.mp3 packaged with the extension
        soundPath = context.asAbsolutePath('faaah.mp3');
    }

    const platform = os.platform();
    let cmd = '';

    if (platform === 'darwin') {
        const escapedMacPath = soundPath.replace(/"/g, '\\"');
        cmd = `afplay "${escapedMacPath}"`;
    } else if (platform === 'win32') {
        const winPath = soundPath.replace(/\//g, '\\');
        const escapedWinPath = winPath.replace(/'/g, "''");
        const isWav = winPath.toLowerCase().endsWith('.wav');
        if (isWav) {
            cmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "(New-Object Media.SoundPlayer '${escapedWinPath}').PlaySync()"`;
        } else {
            cmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "Add-Type -AssemblyName PresentationCore; $p = New-Object System.Windows.Media.MediaPlayer; $p.Open('${escapedWinPath}'); $p.Play(); Start-Sleep -Milliseconds 2000"`;
        }
    } else {
        // Linux / other
        const escapedLinuxPath = soundPath.replace(/"/g, '\\"');
        cmd = `paplay "${escapedLinuxPath}" || aplay "${escapedLinuxPath}" || play "${escapedLinuxPath}"`;
    }

    if (cmd) {
        exec(cmd, (err) => {
            if (err) {
                console.error('[Faah Sound] Error playing sound:', err);
                vscode.window.showErrorMessage(`Faah Sound: Failed to play sound file. Details: ${err.message}`);
            }
        });
    }
}

export function deactivate() {}
