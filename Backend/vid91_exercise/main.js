const fs = require("fs");
const path = require("path");

// Directory (where the files are located) path to organize
const directoryPath = 'D:/programming/ReviceHTML_CSS_JS/LCode/Backend/vid91_exercise';

// Function to organize files based on extension
function organizeFile(directoryPath) {
  // Read the directory contents
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      return;
    }

    // Iterate over each file in the directory
    files.forEach(file => {
      // Get the full file path
      const filePath = path.join(directoryPath, file);

      // Check if the item is a file (not a directory)
      if (fs.lstatSync(filePath).isFile()) {  // Corrected lstatSync
        // Get the file extension (e.g. 'jpg', 'png')
        const fileExtension = path.extname(file).slice(1);

        // Create the folder name based on the file extension
        const folderPath = path.join(directoryPath, fileExtension);

        // Check if the folder for this extension exists, if not, create it
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
          console.log(`Created folder: ${folderPath}`);
        }

        // Move the file into the corresponding extension folder
        const newFilePath = path.join(folderPath, file);
        fs.rename(filePath, newFilePath, (err) => {
          if (err) {
            console.error(`Error moving file ${file}:`, err);
          } else {
            console.log(`Moved file: ${file} -> ${folderPath}`);
          }
        });
      }
    });
  });
}

// Call the function to organize the files
organizeFile(directoryPath);
