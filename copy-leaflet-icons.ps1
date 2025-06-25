# Copy Leaflet Marker Icons
# Run this script to copy Leaflet marker icons to your public folder

$targetDir = "public\images\leaflet"

# Create directories if they don't exist
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force
}

# Define marker icon paths in node_modules
$sourceDir = "node_modules\leaflet\dist\images"
$markerIcon = Join-Path $sourceDir "marker-icon.png"
$markerIcon2x = Join-Path $sourceDir "marker-icon-2x.png" 
$markerShadow = Join-Path $sourceDir "marker-shadow.png"

# Copy the files
Copy-Item -Path $markerIcon -Destination (Join-Path $targetDir "marker-icon.png") -Force
Copy-Item -Path $markerIcon2x -Destination (Join-Path $targetDir "marker-icon-2x.png") -Force
Copy-Item -Path $markerShadow -Destination (Join-Path $targetDir "marker-shadow.png") -Force

Write-Host "Leaflet marker icons copied successfully to $targetDir"
