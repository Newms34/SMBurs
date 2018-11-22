# SM Backup Restore

### What It Is:
This utility backs up or restores Scrap Mechanic save files using a CLI (Command Line Interface) into a folder `SMBackup` in your documents folder.

### Requirements:
 - You need [NodeJS](https://nodejs.org). It's JavaScript on the server, and it's pretty cool. 
 - You also need Scrap Mechanic. Otherwise there's nothing to save!
 - Oh, and you need to be on Windows. Sorry, POSIX people!
 - It does *not* have any external other dependencies! You're welcome.

### Usage:
To use **SM Backup Restore**:

 1. Download it. If you're not reading this on a website, you've probably already done that.
 2. Navigate to the folder you installed it in using good ol' Windows Explorer. If you downloaded it as a ZIP from GitHub, you'll have to unzip it first.
 3. In the address bar of that folder (it might say something like `This PC > Downloads` or something). type `cmd` and press enter to open a command prompt.
 4. Type `node smBurs.js` and press Enter
 5. Follow the prompts to either 1) backup a save or 2) restore a backup.

### Troubleshooting

  - **The command prompt says "'node' is not recognizable as an internal or external command...":** That probably means you didn't install NodeJS. Go do that; it won't bite.
  - **When I run the Backup utility, it says my file doesn't exist!:** Then it probably doesn't. Sorry, but without knowing your specific computer setup, I can't help further.
  - **Do I *have* to install NodeJS to use this?:** Yes. Stop whining.
  - **Another error occured!:** That sucks, and I'm sorry, but could you send me a message regarding exactly what happened? Thanks!

# EDIT:
You no longer need NodeJS (tho you should still get it)! Just download the `.exe` and use it!