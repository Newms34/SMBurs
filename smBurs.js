const bu = require('./src/smSave.js'),
    rs = require('./src/smRestore.js'),
    readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

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