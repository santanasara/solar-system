import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const getDetail = async (filter) => {
  try {
    const response = await api.get(`?filter=${filter}&searchBy=id`);

    return { res: true, msg: response.data };
  } catch (error) {
    return { res: false, msg: [] };
  }
};
