import { apiUrl } from '../config/apiUrl';
import { Users } from '../models/dictionary';

export const getAllUsers = async () => {
  try {
    const response = await apiUrl.get('/user/all');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users:' + error);
  }
};

export const createUser = async (userData: Users) => {
  try {
    const response = await apiUrl.post('/user/create', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user:' + error);
  }
};

export const updateUser = async (
  updateData: {
    grado: string;
    nombre: string;
    username: string;
    rol: string;
  },
  id: string
) => {
  try {
    const response = await apiUrl.put(`/user/${id}`, updateData);
    return response;
  } catch (error) {
    throw new Error('Error updating user:' + error);
  }
};

export const getAllRoles = async () => {
  try {
    const response = await apiUrl.get('/user/roles');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching roles:' + error);
  }
};
