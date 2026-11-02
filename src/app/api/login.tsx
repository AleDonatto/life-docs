import { apiUrl } from '../config/apiUrl';

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await apiUrl.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error api login user', error);
    throw new Error('Error api login user');
  }
};
