const axios = require("axios");
const api = {
  getUser(answer) {
    const queryUrl = `https://api.github.com/users/${answer}`;
    return axios.get(queryUrl);
  },
};
module.exports = api;

// return axios
// .get(`https://api.github.com/users/${username}`)
// .then((res) => {
//   profPictUrl = res;
//   console.log(profPicUrl);
// })
// .catch((err) => {
//   console.log(`Error: invalid Github username`);
// });
// }

// gitHub();
