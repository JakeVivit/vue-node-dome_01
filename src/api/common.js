export const imgBaswUrl = process.env.NODE_ENV === 'development'?'\'http://oss.51xuewudao.cn/':'http://oss.zhulogic.com/';

export function constructQueryParams(params) {
  let url = constructUrl(params);
  return url.slice(0,url.length-1);
}

function constructUrl(params=''){
  if (typeof(params) != 'object') {
    return '';
  }
  let url = '?';
  for (let key in params) {
    let value = params[key];
    if (typeof(value) == 'object') {
      url += constructUrl(value).replace('?','');
    } else if(value||value===0) {
      url = `${url}${key}=${encodeURI(value)}&`;
    }
  }
  return url;
}

export function deconstructUrl(url='') {
  if(!url.includes('?')){
    return ;
  }
  let params = {};
  let arr = url.split('?')[1].split('&');
  arr.forEach(function(item){
    let entries = item.split('=');
    params[entries[0]] = decodeURI(entries[1]);
  });
  return params;
}
