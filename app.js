const { exec } = require('child_process');

// Specify the file path for CMD or a script you want to run
const filePath = 'C:\\Windows\\System32\\cmd.exe'; // This is the default CMD path

// Open CMD via the file path
exec(`start "" "${filePath}"`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
