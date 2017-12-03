/* Test examples of env variables use in different cases */

const fileName = process.env.APPDATA + '/folder/file.txt';

const fileData = fs.readFileSync(process.env.APPDATA + '/folder/file.txt',{encoding:'utf8'});

const CONFIG = {
    appExe: process.env.APPDATA + 'coolApp/app.exe'
};

getAppExec(process.env.APPDATA);

function getAppExec(appData) {
    return appData + 'filename.exe';
}
