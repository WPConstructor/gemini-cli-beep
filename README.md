# Gemini CLI Beep Plugin

A cross-platform (Windows, macOS, Linux) Gemini CLI extension that triggers three audible terminal beeps (`\x07`) whenever:
- **Input is required** (via CLI notifications such as tool permissions or prompts requiring user intervention).
- **A task finishes** (when an agent turn or execution loop completes).

## Downloading the Repository

To get the repository on your local machine (Linux, Windows, or macOS), choose one of the methods below:

### Method 1: Using Git (Recommended)
Open your terminal (Terminal on macOS/Linux, Command Prompt or PowerShell on Windows) and run:
```bash
git clone <repository-url>
cd gemini-cli-beep
```

### Method 2: Downloading as a ZIP Archive
1. Go to the repository page on GitHub.
2. Click the **Code** button and select **Download ZIP**.
3. Extract the downloaded ZIP file to your preferred directory.
4. Open your terminal and navigate into the extracted folder:
   ```bash
   cd path/to/gemini-cli-beep
   ```

## Installation & Linking

1. Link the extension in Gemini CLI:
   ```bash
   gemini extensions link .
   ```
2. Enable notifications in Gemini CLI settings if needed (`/settings` -> Enable Notifications).

## Removal / Uninstallation

If you no longer need the plugin, you can remove it using the Gemini CLI:

```bash
gemini extensions uninstall gemini-cli-beep
```

You can also safely delete the local repository folder from your computer after uninstallation.
