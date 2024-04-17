import axios from 'axios';

export const getAPI = async (url) => {
    const { REACT_APP_API_URL: apiUrl } = process.env;
    // console.log("UUUU:",apiUrl);
    const { data } = await axios.get(`${apiUrl}${url}`);
    return data;
}

export const postAPI = async (url, data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    // console.log('postAPI', apiUrl);
    const { res } = await axios.post(`${apiUrl}${url}`, data);
    return res;
}