const axios = require('axios');

const recall = async ({ //������Ϣ,����BOT���ܳ���Ⱥ����Ϣ,�ᱨ��
  target,
  sessionKey,
  host,
}) => {
  return await axios.post(`${host}/recall`, {
    sessionKey,
    target,
  }).catch(e => {
    console.error('Error @ recall', e.message);
  });
};

module.exports = recall;