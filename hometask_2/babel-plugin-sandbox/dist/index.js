'use strict';

/* Test examples of env variables use in different cases */

var fileName = process.env.PWD + '/folder/file.txt';

var fileData = fs.readFileSync(process.env.PWD + '/folder/file.txt', { encoding: 'utf8' });

var CONFIG = {
    appExe: process.env.PWD + 'coolApp/app.exe'
};

getAppExec(process.env.PWD);

function getAppExec(appData) {
    return appData + 'filename.exe';
}