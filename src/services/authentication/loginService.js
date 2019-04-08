import axios from 'axios';

const loginUserService = async (email, password) => {
  const endpoint = 'https://crm.redcapital.pe/api/login';

  const body = {
    email,
    password,
    provider: 'users'
  };

  return await axios.post(endpoint, body);
};

export default loginUserService;
