const path = require('path');

// Get the directory name of the current module
console.log('Directory name:', __dirname);

// Get the file name of the current module
console.log('File name:', __filename);

// Building paths relative to the current module
const configPath = path.join(__dirname, 'config', 'app-config.json');
console.log('Config file path:', configPath);

const logsPath = path.join(__dirname, 'logs', 'logs.json');
console.log('Logs file path:', configPath);

const reportsPath = path.join(__dirname, 'reports', 'reports.json');
console.log('Config file path:', configPath);

// Getting the directory name using path.dirname()
console.log('Directory using path.dirname():', path.dirname(__filename));

const os = require('os');

console.log(`OS Platform: ${os.platform()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}MB free of ${totalMemGB}MB`);

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);

const fs = require('fs');

// Read file asynchronously with callback
fs.readFile('session.log', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Session log content:', data);
});

const fs = require('fs').promises;

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('summary.txt', 'utf8');

    // Write JSON data
    const data = { desc: 'This is sample session log file' };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

writeFileExample();

let events = require('events');
let eventEmitter = new events.EventEmitter();

//Create an event handler:
let myEventHandler = function () {
  console.log('event started');
}

//Assign the event handler to an event:
eventEmitter.on('event', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('event started successfully');

emitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// This will trigger the error handler
emitter.emit('error', new Error('Something went wrong'));

