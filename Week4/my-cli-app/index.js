const { program } = require('commander');

// Define the version and description of your CLI
program
  .version('1.0.0')
  .description('A simple CLI application for greeting users');

// Define the 'greet' command
program
  .command('greet')
  .description('Greet the user')
  .option('-n, --name <name>', 'Your name')
  .action((options) => {
    // Retrieve the name from command-line options
    const name = options.name || 'Stranger';
    console.log(`Hello, ${name}!`);
  });

// Parse command-line arguments
program.parse(process.argv);