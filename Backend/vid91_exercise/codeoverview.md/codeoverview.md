const fs = require("fs");  // Node.js file system module
const path = require("path");  // Node.js path module for handling file paths

// Directory where the files are located
const directoryPath = 'D:/programming/ReviceHTML_CSS_JS/LCode/Backend/vid91_exercise';

// Function to organize files by their extensions
function organizeFilesByExtension(directoryPath) {

  // 1. Read all the files in the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      // Handle error if directory cannot be read
      console.error('Error reading the directory:', err);
      return;
    }

    // 2. Iterate over each item in the directory
    files.forEach(file => {
      const filePath = path.join(directoryPath, file);  // Full file path for each item

      // 3. Check if the item is a file (not a directory)
      fs.lstat(filePath, (err, stats) => {  // Asynchronously check file stats
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isFile()) {  // Only proceed if it's a file
          // 4. Get the file extension (like 'jpg', 'png')
          const fileExtension = path.extname(file).slice(1);  // Get extension without the dot

          // 5. Define the folder name based on the file extension
          const folderPath = path.join(directoryPath, fileExtension);  // Folder for the extension

          // 6. Check if the folder for that extension exists, if not, create it
          if (!fs.existsSync(folderPath)) {  // Synchronously check if folder exists
            fs.mkdirSync(folderPath);  // Create folder if it doesn't exist
            console.log(`Created folder: ${folderPath}`);
          }

          // 7. Define the new path for moving the file into the corresponding folder
          const newFilePath = path.join(folderPath, file);

          // 8. Move the file to its corresponding folder
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(`Error moving file ${file}:`, err);  // Handle any errors during the move
            } else {
              console.log(`Moved file: ${file} to ${folderPath}`);  // Success message
            }
          });
        }
      });
    });
  });
}

// Call the function to organize the files in the specified directory
organizeFilesByExtension(directoryPath);
