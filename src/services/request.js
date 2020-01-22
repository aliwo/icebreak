import axios from 'axios';

const getBaseURL = () => {
  if (window.location.hostname === 'www.icebreaker.co.kr') {
    return process.env.PRODUCTION_API;
  }
  return process.env.LOCAL_API;
};

const service = axios.create({
  baseURL: getBaseURL(),
  timeout: 5000,
});


export default service;
