const axios = require('axios');

const getMemberList = async ({ //��ȡȺ��Ա�б�
  target,
  host,
  sessionKey,
}) => {
  const { data } = await axios.get(`${host}/memberList`, {
    params: {
      sessionKey,
      target,
    },
  });
  return data;
};

const setMute = async ({ //Ⱥ����Ⱥ��Ա
  target,
  memberId,
  time,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/mute`, {
    sessionKey,
    target,
    memberId,
    time,
   });
   return data;
};
const setUnmute = async ({ //Ⱥ���Ⱥ��Ա����
  target,
  memberId,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/unmute`, {
    sessionKey,
    target,
    memberId,
  });
  return data;
};

const setMuteAll = async ({ //Ⱥȫ�����
  target,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/muteAll`, {
    sessionKey,
    target,
  });
  return data;
};

const setUnmuteAll = async ({ //Ⱥ���ȫ�����
  target,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/unmuteAll`, {
    sessionKey,
    target,
  });
  return { data };
};

const setKick = async ({ //�Ƴ�Ⱥ��Ա
  target,
  memberId,
  msg,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/kick`, {
    sessionKey,
    target,
    memberId,
    msg,
  });
  return data;
}

const getConfig = async ({ //��ȡȺ����
  target,
  host,
  sessionKey,
}) => {
  const { data } = await axios.get(`${host}/groupConfig`, {
    params: {
      sessionKey,
      target,
    },
  });
  return data;
};
const setConfig = async ({ //�޸�Ⱥ����
  target,
  config,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/groupConfig`, {
    target,
    sessionKey,
    config,
  });
  return data;
};

const getMemberInfo = async ({ //��ȡȺԱ����
  target,
  memberId,
  host,
  sessionKey,
}) => {
  const { data } = await axios.get(`${host}/memberInfo`, {
    params: {
      sessionKey,
      target,
      memberId,
    },
  });
  return data;
};

const setMemberInfo = async ({ //�޸�ȺԱ����
  target,
  memberId,
  info,
  host,
  sessionKey,
}) => {
  const { data } = await axios.post(`${host}/memberInfo`, {
    target,
    memberId,
    info,
    sessionKey,
  });
  return data;
}

const handleMemberJoinRequest = async({ //��ȡ��Ⱥ����
  sessionKey,
  host,
  eventId,
  fromId,
  groupId,
  operate,
  message
}) => {
  const { data } = await axios.post(`${host}/resp/memberJoinRequestEvent`, {
    sessionKey,
    eventId,
    fromId,
    groupId,
    operate,
    message
  });
  return data;
}

module.exports = {
  getMemberList,
  setMute,
  setUnmute,
  setMuteAll,
  setUnmuteAll,
  setKick,
  getConfig,
  setConfig,
  getMemberInfo,
  setMemberInfo,
  handleMemberJoinRequest
};
