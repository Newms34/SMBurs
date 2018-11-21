const fs = require('fs');
    // readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const doSv = (rl) => {
    console.log('Scrap Mechanic Backup Utility\n-----------------\nThis process will backup a chosen save file in your Documents folder, in a subfolder "SMBackup"')
    fs.readdir(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User', function(err, dir) {
        console.log(`Available Users:\n`, dir.map((c, i) => (i + 1) + '.) ' + c).join('\n'));
        rl.question(`Pick a User number. Unsure? Leave blank, and we'll select the first one (which is probably you anyway!)\n`, (usrCh) => {
            // rl.close();

            usrCh = parseInt(usrCh);
            if (!usrCh || isNaN(usrCh) || usrCh < 1 || usrCh > dir.length) {
                usrCh = 1;
            }
            fs.readdir(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save', function(errSv, saveDir) {
                saveDir = saveDir.filter(t => t.indexOf('.db') > -1)
                // console.log('users saves', saveDir, errSv)
                console.log(`User's saves:\n`, saveDir.map((c, i) => (i + 1) + '.) ' + c).join('\n'));
                rl.question(`Pick a Save number. Defaults to 1.\n`, (svCh) => {
                    rl.close();
                    svCh = parseInt(svCh);
                    // console.log('ORIGINAL SVCH', svCh, typeof svCh)
                    if (!svCh || isNaN(svCh) || svCh < 1 || svCh > saveDir.length) {
                        svCh = 1;
                    }
                    // console.log(svCh)
                    // console.log('userProfile env var', process.env.USERPROFILE)
                    let docFoldr = fs.existsSync(process.env.USERPROFILE + '/documents') ? process.env.USERPROFILE + '/documents' : process.env.USERPROFILE + '/my documents';
                    fs.readdir(docFoldr, (errSD, saveOutDir) => {
                    	//check if save out folder in docs exists
                        // console.log('Save dir opts:', saveDir, 'docFoldr', docFoldr)
                        if (saveOutDir.indexOf('SMBackup') < 0) {
                            fs.mkdirSync(docFoldr + '/SMBackup');
                        }
                        // console.log('FINAL INFO', usrCh, svCh, docFoldr,process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save/'+saveDir[svCh-1])
                        // const theFile  =fs.readFileSync(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save/'+saveDir[svCh],'utf-8');
                        fs.copyFileSync(process.env.APPDATA + '/Axolot Games/Scrap Mechanic/User/' + dir[usrCh - 1] + '/save/'+saveDir[svCh-1],docFoldr+'/SMBackup/'+saveDir[svCh-1])
                        // console.log('FILE'+theFile+'END FILE');
                        console.log(`User ${dir[usrCh - 1]} save file ${saveDir[svCh-1]} was backed up!`)
                        process.exit();
                    })
                })
            })
        })
    })
}
module.exports = doSv;
// console.log(process.env)