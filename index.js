const terminal = document.querySelector('.terminal');
const output = terminal.querySelector('.output');
const inputLine = terminal.querySelector('.input-line');
const commandLine = terminal.querySelector('#command-line');

// create const shutdown text with multi line string
const shutdownText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will shutdown now!`;

const rebootText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will reboot now!`;




function outputCommand() {
    const input = commandLine.value;
    const outputString = `\n> ${input}\n`;
    output.innerHTML += outputString;
    commandLine.value = '';
    handleCommand(input);
}

function handleCommand(command) {
    if (command === 'help') {
        const helpText = `Available commands:\n
        help - displays this help message\n
        clear - clears the screen\n
        whoami - displays information about the user\n
        about - displays information about me\n
        projects - displays a list of my projects\n
        contact - displays my contact information\n
        sourcecode - displays the source code of this website\n
        poweroff - turns off the computer\n
        reboot - restarts the computer\n`
        output.innerHTML += helpText;
    } else if (command === 'clear') {
        output.innerHTML = '';
    } else if (command === 'whoami') {
        output.innerHTML += "root"
    } else if (command === 'about') {
        output.innerHTML += "I am sxnvte. 13 yo developer from Poland. I code in Python, C#, HTML, CSS. I also like Linux, play gams and i know some things about audio. I am currently learning ethical hacking and thats it!"
    } else if (command === 'projects') {
        output.innerHTML += "my main projects are:\n\nFSAH - A simple AUR helper written in Python\n\nThe website you are currently on\n\nsxPyShell - A simple Python shell.\n\nto see more projects check out my github: https://github.com/sxnvte\n\n"
    } else if (command === 'contact') {
        output.innerHTML += "for contact you can use:\n\nDiscord: sxnvte#0277\n\nEmail: sxnate000@gmail.com\n\n"
    } else if (command === 'sourcecode') {
        window.location.replace('https://github.com/sxnvte/sxnvte.github.io');
    } else if (command === 'poweroff') {
        output.innerHTML += shutdownText;
        delete inputLine;
        setTimeout(function() {
            window.location.replace('https://duckduckgo.com/');
        }, 1000);
    } else if (command === 'reboot') {
        output.innerHTML += "rebooting...\n";
        setTimeout(function() {
            window.location.replace('https://sxnvte.github.io/');
        }, 1000);

    } else {
        const errorText = `Command '${command}' not found. Type 'help' for a list of available commands.`;
        output.innerHTML += errorText;
    }
}

commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        outputCommand();
    }
});

commandLine.focus();
