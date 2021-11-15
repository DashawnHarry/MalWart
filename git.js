const { exec } = require("child_process");

if (process.argv[2] === undefined) {
  console.error("Error: Invalid number of arguments");
  process.exit();
}

const branch = process.argv[2];

const commands = [
  "git checkout main",
  "git pull",
  `git checkout ${branch}`,
  "git merge main",
];

// for (let command of commands) {
//   exec(command, (err, stdout) => {
//     if (err) console.log(err);
//     console.log(stdout);
//   });
// }

exec(
  `git checkout main && git pull && git checkout ${branch} && git merge main`,
  (err, stdout) => {
    if (err) console.log(err);
    console.log(stdout);
  }
);

// exec("git checkout main", (err, stdout, stderr) => {
//   console.log("1");
//   if (err) console.log(err);
//   if (stderr) console.log(stderr);
//   console.log(stdout);
// });

// exec("git pull", (err, stdout, stderr) => {
//   console.log("2");
//   if (err) console.log(err);
//   if (stderr) console.log(stderr);
//   console.log(stdout);
// });

// exec(`git checkout ${branch}`, (err, stdout, stderr) => {
//   console.log("3");
//   if (err) console.log(err);
//   if (stderr) console.log(stderr);
//   console.log(stdout);
// });

// exec("git merge main", (err, stdout, stderr) => {
//   console.log("4");
//   if (err) console.log(err);
//   if (stderr) console.log(stderr);
//   console.log(stdout);
// });
