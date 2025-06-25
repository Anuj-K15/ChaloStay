// Cross-platform script to copy Leaflet marker icons to the public folder
const fs = require("fs");
const path = require("path");

// Define paths
const sourceDir = path.join(
  __dirname,
  "node_modules",
  "leaflet",
  "dist",
  "images"
);
const targetDir = path.join(__dirname, "public", "images", "leaflet");

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log(`Creating directory: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Files to copy
const files = ["marker-icon.png", "marker-icon-2x.png", "marker-shadow.png"];

// Copy the files
files.forEach((file) => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);

  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${sourcePath} to ${targetPath}`);
    } else {
      console.error(`Source file not found: ${sourcePath}`);
    }
  } catch (error) {
    console.error(`Error copying ${file}:`, error);
  }
});

console.log("Leaflet marker icons copied successfully");
