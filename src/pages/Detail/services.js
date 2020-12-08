import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const getDetail = async (filter) => {
  try {
    const response = await api.get(`?filter=${filter}&searchBy=title`);

    return { res: true, msg: response.data };
  } catch (error) {
    return { res: false, msg: [] };
  }
};
