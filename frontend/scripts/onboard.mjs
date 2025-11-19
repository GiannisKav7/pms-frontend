#!/usr/bin/env node
// Simple onboarding script: installs deps and prepares env file.
import { existsSync, copyFileSync } from "fs";
import { execSync } from "child_process";

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

// Ensure we're in project root (frontend). Not bulletproof, but basic check.
if (!existsSync("package.json")) {
  console.error(
    "Run this script from the frontend directory containing package.json."
  );
  process.exit(1);
}

// Create .env.development from example if missing.
if (!existsSync(".env.development") && existsSync(".env.example")) {
  copyFileSync(".env.example", ".env.development");
  console.log("Created .env.development from .env.example");
}

// Install dependencies.
run("npm install");

// Optional auto-start if flag passed.
if (process.argv.includes("--start")) {
  console.log("Starting dev server...");
  run("npm run dev");
} else {
  console.log("\nOnboarding complete. Next steps:");
  console.log("  1. Adjust .env.development if needed.");
  console.log("  2. Run: npm run dev");
  console.log("\nFor auto-start use: npm run onboard -- --start");
}
