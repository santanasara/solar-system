import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sistema-solar-api.herokuapp.com/',
});

export const getDetail = async (filter, searchBy) => {
  try {
    const response = await api.get(`?filter=${filter}&searchBy=${searchBy}`);

    return { res: true, msg: response.data };
  } catch (error) {
    return { res: false, msg: [] };
  }
};
