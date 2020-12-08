import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const getDetail = async (filter, searchBy) => {
  try {
    const response = await api.get(`?filter=${filter}&searchBy=${searchBy}`);

    return { res: true, msg: response.data };
  } catch (error) {
    return { res: false, msg: [] };
  }
};
