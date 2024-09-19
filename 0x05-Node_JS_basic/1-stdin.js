process.stdout.write('Welcome to Holberton School, what is your?\n')

process.stdin.on('readable', () => {
  const readline = process.stdin.read();

  if (readline) {
    process.stdout.write(`Your name is: ${readline}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
