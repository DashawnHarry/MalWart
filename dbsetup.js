const { exec } = require("child_process");

const windowCommands = [
  "psql -U postgres -f server/database/migration.sql malwartdb",
  "psql -U postgres -f server/database/seed.sql malwartdb",
];

const macCommands = [
  "psql -f server/database/migration.sql MalWartDB",
  "psql -f server/database/seed.sql MalWartDB",
];

const executeCommands = () => {
  let platformCommands =
    process.platform === "win32" ? windowCommands : macCommands;

  for (let command of platformCommands) {
    exec(command, (err, stdout) => {
      if (err) console.log(err);
      console.log(stdout);
    });
  }
};

executeCommands();
