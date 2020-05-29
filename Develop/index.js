const fs = require("fs");
const promptUser = require("./utils/promptuser");
const buildTemplate = require("./utils/generateMarkdown");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

async function gitHub(username) {
  const user = await promptUser();
  let profPictUrl;
  const { data: gitInfo } = await api.getUser(input.username);
  const README = buildTemplate(input, gitInfo);
  fs.writeFile("newReadMe.md", README, function (err) {
    if (err) {
      throw err;
    }
    console.log("Success!");
  });
}

gitHub();
