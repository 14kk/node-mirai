const axios = require('axios');

const fetchMessage = async (host, sessionKey, count = 10) => { //ʹ�ô˷�����ȡbot���յ���������Ϣ�����ϸ����¼�(���MiraiApiHttp��Ϣ��¼��ɾ��)
  const { data } = await axios.get(`${host}/fetchMessage?sessionKey=${sessionKey}&count=${count}`, );
  if ('code' in data && data.code === 0) return data.data;
  return data;
};

module.exports = fetchMessage;