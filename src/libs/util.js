import axios from 'axios';
import store from '../store';
import router from '../router';

let util ={};

const ajaxUrl = process.env.NODE_ENV === 'development' ?
  'http://localhost:8090' :
  'http://47.92.73.203:3000';
util.ajax = axios.create({
  baseURL:ajaxUrl,
  timeout: 3000
})
util.baseAjaxUrl = ajaxUrl;

export default util;
