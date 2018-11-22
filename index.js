const bu = require('./src/smSave.js'),
    rs = require('./src/smRestore.js'),
    readline = require('readline'),
    chalk=require('chalk'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
console.log(chalk.bgYellow.black('Scrap Mechanic™'),'\nBackup and Restore Utility\n',...new Array(10).fill(100).map((c,i)=>!c%2?chalk.yellow('--'):'--'))
rl.question('Do you wish to backup (1) or restore (2)? Any other choice will exit. \nEnter a choice: ',(bursCh)=>{
	// rl.close();
	if(bursCh.toString()=='2'){
		rs(rl);
	}else if(bursCh.toString() =='1'){
		bu(rl);
	}else{
		console.log(`That's an invalid choice, so we're gonna assume you just wanna exit without performing an action. Bye!`)
		rl.close();
		process.exit();
	}
})