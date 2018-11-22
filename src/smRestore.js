const fs = require('fs'),
    chalk = require('chalk');
// readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const doRest = (rl) => {
    console.log('\n\n', chalk.bgYellow.black('Scrap Mechanic™'), '\nRestore Utility\n-----------------\nThis process will restore a chosen save file in your Documents folder, in a subfolder "SMBackup", if it exists')
    fs.readdir(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User', function(err, dir) {
        console.log(`\nAvailable Users:\n`, dir.map((c, i) => chalk.cyan((i + 1) + '.) ' + c)).join('\n'));
        rl.question(`Pick a User number. Unsure? Leave blank, and we'll select the first one (which is probably you anyway!)\n`, (usrCh) => {
            // rl.close();

            usrCh = parseInt(usrCh);
            if (!usrCh || isNaN(usrCh) || usrCh < 1 || usrCh > dir.length) {
                usrCh = 1;
            }
            console.log(usrCh)
            fs.readdir(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save', function(errSv, saveDir) {
                saveDir = saveDir.filter(t => t.indexOf('.db') > -1)
                // console.log('users saves', saveDir, errSv)
                console.log(`User's saves:\n`, saveDir.map((c, i) => (i + 1) + '.) ' + c).join('\n'));
                rl.question(`Pick a Save number. Defaults to 1.\n`, (svCh) => {
                    rl.close();
                    svCh = parseInt(svCh);
                    if (!svCh || isNaN(svCh) || svCh < 1 || svCh > saveDir.length) {
                        svCh = 1;
                    }
                    let docFoldr = fs.existsSync(process.env.USERPROFILE + '/documents') ? process.env.USERPROFILE + '/documents' : process.env.USERPROFILE + '/my documents';
                    fs.readdir(docFoldr, (errSD, saveOutDir) => {
                        //check if save out folder in docs exists
                        if (saveOutDir.indexOf('SMBackup') < 0) {
                            fs.mkdirSync(docFoldr + '/SMBackup');
                        }
                        // const theFile  =fs.readFileSync(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save/'+saveDir[svCh],'utf-8');
                        if (!fs.existsSync(docFoldr + '/SMBackup/' + saveDir[svCh - 1])) {
                            console.log(chalk.bgRed('ERROR:'), '\nIt looks like that file was never backed up! We can\'t restore a file that has no backup!')
                        } else {
                            fs.copyFileSync(docFoldr + '/SMBackup/' + saveDir[svCh - 1], process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save/' + saveDir[svCh - 1])
                        }
                        console.log(chalk.green(`World ${saveDir[svCh-1]} was restored!`));
                        setTimeout(function() {

                            process.exit();
                        }, 30000);
                    })
                })
            })
        })
    })
}
module.exports = doRest;
// console.log(process.env)