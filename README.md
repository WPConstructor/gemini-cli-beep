# Gemini CLI Beep Plugin

A cross-platform (Windows, macOS, Linux) Gemini CLI extension that triggers three audible terminal beeps (`\x07`) whenever:
- **Input is required** (via CLI notifications such as tool permissions or prompts requiring user intervention).
- **A task finishes** (when an agent turn or execution loop completes).

## Installation

1. Link the extension in Gemini CLI:
   ```bash
   gemini extensions link .
   ```
2. Enable notifications in Gemini CLI settings if needed (`/settings` -> Enable Notifications).
