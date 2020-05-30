const fs = require("fs");
const promptUser = require("./utils/promptuser");
const api = require("./utils/apis.js");
const util = require("util");

const fileAsync = util.promisify(fs.writeFile);

function makeReadMe(answer, data) {
  console.log(answer);
  return `
    #${answer.username}
    [![Github license](https://img.shields.io/badge/license-${answer.license}-brightgreen.svg)](https://github.com/${answer.username})

    ##Description

    ${answer.description}

    ##Table of Contents

    *[Installation](#Installation)

    *[Usage](#Usage)

    *[License](#License)

    *[Contributing](#Contributing)

    *[Testing](#Testing)

    *[Questions](#Questions)

    ##Installation

    To install necessary dependencies, run the following command:

      ${answer.installation}

    ##Usage

      ${answer.usage}

    ##License

    This project is licensed under the ${answer.license} license.

    ##Contributing

      ${answer.contributions}

    ##Testing

    To test the application, run the following command:

      ${answer.testing}

    ##Questions

      If you have questions about the application please contact the developer at [${answer.username}](https://github.com/${answer.username}) directly.
  `
}


async function start() {
  try {
    const answer = await promptUser
    const {
      data
    } = await api
    const readMe = makeReadMe(answer, data);
    await fileAsync("ReadMe.md", readMe)
  } catch (error) {
    console.log(error)
  }
}
start();
/*
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
*/