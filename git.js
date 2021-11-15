const { exec } = require("child_process");

if (process.argv[2] === undefined) {
  console.error("Error: Invalid number of arguments");
  process.exit();
}

const branch = process.argv[2];

exec(
  `git checkout main && git pull && git checkout ${branch} && git merge main`,
  (err, stdout) => {
    if (err) console.log(err);
    console.log(stdout);
  }
);
