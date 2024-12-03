const fs = require('fs');
const path = require('path');

// Define the starting directory
const directoryPath = 'D:/programming/ReviceHTML_CSS_JS/LCode/Backend/vid91_exercise';

function searchFile(directoryPath, targetFile) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);

      // Check if it's a directory or a file
      fs.lstat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting stats for file:', err);
          return;
        }

        if (stats.isFile() && file === targetFile) {
          console.log(`File found: ${filePath}`);
        } else if (stats.isDirectory()) {
          // Recursively search in subdirectories
          searchFile(filePath, targetFile);
        }
      });
    });
  });
}

// Search for 'main.js' starting from the root directory
searchFile(directoryPath, 'main.js');
