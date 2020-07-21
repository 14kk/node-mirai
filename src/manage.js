const axios = require('axios');

const getFriendList = async ({ //��ȡ�����б�
  host,
  sessionKey,
}) => {
  const { data } = await axios.get(`${host}/friendList?sessionKey=${sessionKey}`);
  return data;
};

const getGroupList = async ({ //��ȡȺ�б�
  host,
  sessionKey,
}) => {
  const { data } = await axios.get(`${host}/groupList?sessionKey=${sessionKey}`);
  return data;
};

const getMessageById = async ({ //ͨ��messageId��ȡһ�����������Ϣ
  messageId, 
  host,
  sessionKey,
}) => {
  const { data } = await axios.get(`${host}/messageFromId?sessionKey=${sessionKey}&id=${messageId}`);
  return data;
};

const registerCommand = async ({ //ע��ָ��
  host,
  authKey,
  name,
  alias,
  description,
  usage
}) => {
  const { data } = await axios.post(`${host}/command/register`, {
    authKey, name, alias, description, usage,
  });
  return { data };
};

const sendCommand = async ({ //����ָ��
  host,
  authKey,
  name,
  args,
}) => {
  const { data } = await axios.post(`${host}/command/send`, {
    authKey, name, args,
  });
  return data;
};

const getManagers = async ({ //��ȡMangers
  host,
  authKey,
  qq,
}) => {
  const { data } = await axios.get(`${host}/managers?authKey=${authKey}&qq=${qq}`);
  return data;
};

module.exports = {
  getFriendList,
  getGroupList,
  getMessageById,
  registerCommand,
  sendCommand,
  getManagers,
};
