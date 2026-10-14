#!/usr/bin/env node
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  for (let i = 0; i < 3; i++) {
    process.stderr.write('\x07');
    if (i < 2) {
      await delay(150);
    }
  }
  // Mandatory JSON output to stdout
  console.log(JSON.stringify({}));
}

main().catch(() => {
  console.log(JSON.stringify({}));
});
