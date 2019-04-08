import axios from 'axios';

const loginUserService = async (email, password, provider) => {
  const endpoint = 'https://crm.redcapital.pe/api/logout';

  const body = {
    email,
    password,
    provider
  };

  return await axios.post(endpoint, body);
};

export default loginUserService;
