# Faah Sound on Terminal Error

A premium, lightweight VS Code extension that plays a hilarious "faah!" sound whenever a terminal command fails (returns a non-zero exit code).

## Features

- **Instant Audio Feedback:** Hear a "faah!" immediately when a terminal command exits with an error.
- **Cross-Platform:** Out-of-the-box support for macOS, Windows, and Linux.
- **Custom Sound Support:** Want a different sound? Specify a path to any local audio file.
- **Cooldown protection:** Avoid audio spam when multiple commands fail in rapid succession.

## Configuration

Open your VS Code settings and look for **Faah Sound**:

| Setting | Type | Default | Description |
|---|---|---|---|
| `faahSound.enabled` | `boolean` | `true` | Enable or disable playing the sound. |
| `faahSound.customSoundPath` | `string` | `""` | Absolute path to a custom sound file (.mp3, .wav, .aiff) to play instead of the default "faaah.mp3". |
| `faahSound.cooldownMs` | `number` | `1000` | Cooldown in milliseconds to prevent playing the sound multiple times if errors happen in rapid succession. |

## Commands

- **Faah Sound: Play Test Sound**: Trigger the sound manually to verify it plays correctly on your system.

## Requirements

This extension requires VS Code's **Shell Integration** to be active (enabled by default in modern VS Code versions) to detect terminal command start and end events.

## Installation & Running Locally

1. Open this folder in VS Code.
2. Run `npm install` in your terminal to install developer dependencies.
3. Press `F5` to open a new Extension Development Host window.
4. Open a terminal in the new window, run a command that fails (e.g. `ls non_existent_file`), and enjoy the sound!

## Packaging the Extension

To package this extension into a `.vsix` file for installation:

1. Install `vsce` globally: `npm install -g @vscode/vsce`
2. Run: `vsce package`
