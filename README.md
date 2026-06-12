# Faah Sound: Audio Fail Notification for Terminal Errors

<p align="center">
  <img src="icon.png" width="128" height="128" alt="Faah Sound Logo" style="border-radius: 20%;" />
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=asadullah.faah-terminal-error">
    <img src="https://img.shields.io/visualstudio/marketplace/v/asadullah.faah-terminal-error?style=for-the-badge&color=8A2BE2" alt="Marketplace Version" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=asadullah.faah-terminal-error">
    <img src="https://img.shields.io/visualstudio/marketplace/i/asadullah.faah-terminal-error?style=for-the-badge&color=8A2BE2" alt="Installs" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=asadullah.faah-terminal-error">
    <img src="https://img.shields.io/visualstudio/marketplace/r/asadullah.faah-terminal-error?style=for-the-badge&color=8A2BE2" alt="Rating" />
  </a>
  <a href="https://github.com/theasadse/faah-sound-extension/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/theasadse/faah-sound-extension?style=for-the-badge&color=8A2BE2" alt="License" />
  </a>
</p>

---

**Faah Sound** is a premium, lightweight, and hilarious VS Code extension that plays the instant classic **"faah!"** sound effect whenever a terminal command fails (returns a non-zero exit code). 

Keep debugging lighthearted and never miss a failed background command or build task again!

## 🚀 Features

- 🔊 **Instant Audio Feedback:** Hear a quick, funny "faah!" immediately when a terminal command exits with an error.
- 💻 **Cross-Platform Compatibility:** Native out-of-the-box support for **macOS**, **Windows**, and **Linux** without requiring external audio player packages.
- 🎵 **Custom Sound Effects:** Easily customize your workflow by specifying an absolute file path to any local audio file (`.mp3`, `.wav`, `.aiff`, etc.).
- 🛡️ **Cooldown Protection:** Smart anti-spam mechanism prevents the sound from playing multiple times if errors trigger in rapid succession (e.g., watch mode builds).

## ⚙️ Configuration

You can easily adjust the settings via the VS Code Settings UI (**Preferences** -> **Settings** -> search for **Faah Sound**):

| Setting | Type | Default | Description |
|---|---|---|---|
| `faahSound.enabled` | `boolean` | `true` | Enable or disable playing the failure sound effect. |
| `faahSound.customSoundPath` | `string` | `""` | Absolute path to a custom sound file (.mp3, `.wav`, `.aiff`) to play instead of the default "faaah.mp3". |
| `faahSound.cooldownMs` | `number` | `1000` | Cooldown in milliseconds to prevent repetitive sounds from rapid-fire errors. |

## 🛠️ Commands

- `Faah Sound: Play Test Sound`: Manually play the sound to test your audio output levels and verify native system playback configuration.

## 📋 Requirements & Troubleshooting

### VS Code Shell Integration
This extension relies on VS Code's built-in **Shell Integration** feature to detect when command executions start and finish. 
* Shell integration is **enabled by default** in modern VS Code versions.
* If command failures do not trigger the sound, ensure shell integration is active in your terminal. You can check this by seeing if a small blue circle or indicator appears next to commands in your terminal prompt.
* Make sure `terminal.integrated.shellIntegration.enabled` is set to `true` in your `settings.json`.

---

## 💻 Local Development

1. Clone or open this repository folder in VS Code.
2. Run `npm install` to load dev dependencies.
3. Press `F5` to start a new **Extension Development Host** window.
4. Run any command that fails (e.g. `exit 1` or `ls non_existent_file`) in the terminal of the new window, and enjoy the sound!

## 📦 Packaging

To package this extension into a `.vsix` bundle for manual installation:
1. Install VS Code Extension Manager: `npm install -g @vscode/vsce`
2. Package the extension: `vsce package`
