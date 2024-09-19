process.stdout.write('Welcome to Holberton School, what is your name?\n')

process.stdin.on('readable', () => {
  const readline = process.stdin.read();

  if (readline) {
    const info = readline.toString().trim();
    process.stdout.write(`Your name is: ${info}`);
    process.stdin.end();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
