const fs = require('fs');

function replaceNewlines(filePath, outputFilePath) {
  try {
    // Read the input file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace newline characters with blank spaces
    const modifiedContent = fileContent.replace(/\n/g, ' ');

    // Write the modified content to the output file
    fs.writeFileSync(outputFilePath, modifiedContent, 'utf8');

    console.log('File processed successfully.');
  } catch (error) {
    console.error('An error occurred while processing the file:', error);
  }
}

// Usage example
const filePath = 'txt/[English (auto-generated)] Build and Deploy a React Native App _ 2023 React Native Course Tutorial for Beginners [DownSub.com].txt'
const outputFilePath = 'txt/output.txt'
replaceNewlines(filePath, outputFilePath);
