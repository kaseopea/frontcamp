/* Test examples of env variables use in different cases */
var fileName = 'C:\\Users\\Admin\\AppData\\Roaming' + '/folder/file.txt';

var fileData = fs.readFileSync('C:\\Users\\Admin\\AppData\\Roaming' + '/folder/file.txt', { encoding: 'utf8' });

var CONFIG = {
    appExe: 'C:\\Users\\Admin\\AppData\\Roaming' + 'coolApp/app.exe'
};

getAppExec('C:\\Users\\Admin\\AppData\\Roaming');

function getAppExec(appData) {
    return appData + 'filename.exe';
}