const axios = require('axios');

const verify = async (host, sessionKey, qq) => { //У��Ự
  const { data } = await axios.post(`${host}/verify`, {
    sessionKey, qq,
  });
  return data;
};

module.exports = verify;