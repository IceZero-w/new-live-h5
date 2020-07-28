export default {
  // 获取页面参数
  getUrlParams(key) {
    let paramsStr = '';
    const obj = {};
    if (location.href.indexOf('?') > -1) {
      paramsStr = location.href.split('?')[1];
      const paramsList = paramsStr.split('&');
      paramsList.forEach((paramsItem) => {
        obj[paramsItem.split('=')[0]] = paramsItem.split('=')[1];
      })
    }
    return obj[key];
  },
  // 格式化金额
  getPrice(val) {
    if (val === null || val === '') {
        return val;
    } else if (isNaN(val)) {
        return null;
    } else {
        return (+(val)).toFixed(2);
    }
  },
  // 格式化直播人数
  formatPersonNum(num) {
    let _num = 0;
    if (num < 1000) {
      _num = num;
    } else if (num >= 1000 && num < 10000) {
      _num = `${(num / 1000).toFixed(0)}k+`;
    } else if (num >= 10000 && num < 100000) {
      _num =`${(num / 10000).toFixed(0)}w+`;
    } else if (num >= 100000) {
      _num =`${parseInt(num / 10000)}w`;
    }
    return _num;
  },
  // 判断是不是ios系统，否则则为安卓系统
  isIOS() {
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return isiOS;
  },
  // 判断是否是在微信中
  isWeixin() {
    const ua = navigator.userAgent.toLowerCase();
    console.log(ua, 'dkosksoksoso')
    return ua.indexOf('micromessenger') != -1
  },
  isIphonex(){
    const u = navigator.userAgent;
    if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && typeof window !== 'undefined' && window) {
      return /iphone/gi.test(u) && window.screen.height >= 812;
    }
    return false;
  }
}