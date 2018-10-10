import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

var baseURL = process.env.API_ROOT
var TIME_OUT = 50000;  //如果请求的时间超过'timeout'，请求将被中止
const base_axios_options = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  timeout: TIME_OUT,
}

const orgAxios = axios.create(Object.assign({},{ baseURL:baseURL },base_axios_options));
export const orgModuleApi={
  loginwithmessage:(params)=>{
    return orgAxios.post('/lottery/globaluc/loginwithmessage',qs.stringify(params)).then(res=>res.data);
  },
  sendmessage:(params)=>{
    return orgAxios.post('/lottery/globaluc/sendmessage',qs.stringify(params)).then(res=>res.data);
  },
  upload:(params)=>{
    // return orgAxios.post('/lottery/user/upload',qs.stringify(params)).then(res=>res.data);
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return Vue.http.post(baseURL + '/lottery/user/upload', params, config).then(res=>res.data);
  },
  setinfo:(params)=>{
    // return orgAxios.get('/lottery/user/setinfo',qs.stringify(params)).then(res=>res.data);
    return Vue.http.jsonp(baseURL + '/lottery/user/setinfo'+ params).then(res=>res.data);
  },
  loginwithtoken:(params)=>{
    return orgAxios.post('/lottery/globaluc/loginwithtoken',qs.stringify(params)).then(res=>res.data);
  },
  loadBanner:(params)=>{
    return orgAxios.post('/sysOrg/getByPage?'+qs.stringify(params)).then(res=>res.data);
  },
  getssqData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/ssq').then(res=>res.data);
  },
  getdltData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/dlt').then(res=>res.data);
  },
  getqlcData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/qlc').then(res=>res.data);
  },
  getplsData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/pl3').then(res=>res.data);
  },
  getplwData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/pl5').then(res=>res.data);
  },
  getqxcData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/qxc').then(res=>res.data);
  },
  getfc3dData:(params)=>{
    return Vue.http.jsonp(baseURL + '/lottery/trend/x3d').then(res=>res.data);
  },
  getMessageList:(params)=>{
    return orgAxios.post('/sysOrg/getByPage?'+qs.stringify(params)).then(res=>res.data);
  }
}
