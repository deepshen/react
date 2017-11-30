import axios from 'axios'
import $ from 'jquery'
import qs from 'qs'

//预发模式
const MODEL = 'dev';

//线上模式
// const MODEL = 'dist';

let APPID;
// if(useragent() == 'wechat'){
//     APPID =11
// }else if(useragent() == 'heshenghuo'){
//     APPID = 8
// }else {
    APPID = 7
// }
let BASEURL,BASEIMGURL,UPLOADIMGURL,FUBASEURL;
if(MODEL === 'dev'){
    BASEURL = 'http://dtapi.weixin.leley.org/';
    BASEIMGURL = 'http://img.leley.org/';
    UPLOADIMGURL = 'http://oss.leley.org:8085/';
    FUBASEURL='http://59.110.18.99:8000'
}
else if(MODEL === 'dist'){
    BASEURL = 'http://47.93.158.251';
    BASEIMGURL = 'http://img.leley.com/';
    UPLOADIMGURL = 'http://oss.leley.com/';
    FUBASEURL='http://api.leley.com'
}

axios.defaults.timeout = 15001;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    const data = {
        PHONE:localStorage.phone,
        USERTYPE:2,
        CTYPE:'web',
        TOKEN:localStorage.token || 'default',
        APPID:APPID,
        BODY:JSON.stringify(config.data)
    };
    // config.data=$.extend(true,defaultParam,config.data);
    // config.data = Object.assign(defaultParam,config.data);
    if(config.method  === 'post'){
        config.data = qs.stringify(data);
    }
    return config;
},(error) =>{
    // _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

const errorAlert = function (errorStr) {
    const html = '<div id="modalErrorTips" style="position: fixed;top: 0;left: 0;width:100%;height:100%;text-align: center;font-size: .12rem;opacity: 0;z-index: 999">' +
        '<p style="display:inline-block;background-color: rgba(1,1,1,.7);padding: .1rem .15rem;border-radius: .08rem;color: white;">'+errorStr+'</p>' +
        '</div>';
    $('body').append(html);
    setTimeout(function () {
        $('#modalErrorTips').css({opacity:'1',top:'.15rem',transition:'all .1s linear'})
    },10);
    setTimeout(function () {
        $('#modalErrorTips').css({opacity:'0',top:'0',transition:'all .1s easy-out'})
    },1000);
    setTimeout(function () {
        $('#modalErrorTips').remove();
    },1100);
};
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    // Vue.$vux.loading.hide();
    if(res.data && res.data.code!== '000'
        && res.request.responseURL.indexOf('v1/llyweb/user/getopenid') < 0
        && res.request.responseURL.indexOf('wxUser/bindingPhone') < 0
    ){
        errorAlert(res.data.msg || '接口请求失败');
    }
    return res;
}, (error) => {
    // Vue.$vux.loading.hide();
    errorAlert('网络错误，请检查网络设置');
    return Promise.reject(error);
});


//返回一个Promise(发送post请求)
export function fetch(modal) {
    return new Promise((resolve, reject) => {
        // Vue.$vux.loading.show();
        const obj = {
            method: 'post'
        };
        modal = $.extend(true,obj,modal);
        axios(obj).then(response =>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export default {
    MODEL,
    BASEURL,
    BASEIMGURL,
    UPLOADIMGURL,
    getfreedoclist(data){//医生列表
        return fetch({
            url: BASEURL + '/v1/llyweb/doctor/freeList',
            data:data
        })
    },
    doctorclinic(data){//医生微诊所
        return fetch({
            url: BASEURL + '/v1/llyweb/doctor/doctorMicroClinic',
            data:data
        })
    },
}
