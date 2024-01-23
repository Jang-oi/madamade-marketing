import axios from 'axios';

const BASE_URL_API = 'http://localhost:3001/mada/api/v1/';

/**
 * @param url
 * @param params
 */
export const axiosAPI = (url: string, params: any) => {
  return axios.create({ baseURL: BASE_URL_API }).post(url, { ...params });
};
