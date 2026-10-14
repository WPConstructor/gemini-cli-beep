#!/usr/bin/env node
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const fs = require('node:fs');
const os = require('node:os');
const { spawnSync } = require('node:child_process');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function beep() {
  if (os.platform() === 'win32') {
    // Windows: use the native console beep.
    spawnSync(
      'powershell.exe',
      [
        '-NoProfile',
        '-NonInteractive',
        '-Command',
        '[Console]::Beep(800, 150)',
      ],
      { stdio: 'ignore' }
    );
    return;
  }

  // Linux and macOS: write directly to the terminal.
  try {
    fs.writeSync(fs.openSync('/dev/tty', 'w'), '\x07');
  } catch {
    // The terminal may not be available to the hook.
  }
}

async function main() {
  for (let i = 0; i < 3; i++) {
    beep();

    if (i < 2) {
      await delay(150);
    }
  }

  // Mandatory JSON output to stdout.
  console.log(JSON.stringify({}));
}

main().catch(() => {
  console.log(JSON.stringify({}));
});