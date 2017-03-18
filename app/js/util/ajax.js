'use strict';
import 'isomorphic-fetch'
export function Ajax(param) {
    const method = param.method || 'GET';
    let url = param.url;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");
    let option = {
      credentials: 'same-origin',
      method: method,
      headers: myHeaders
    }
    if(method.toUpperCase() == 'POST') {
      let body = param.body || '';
      if(typeof body === 'object') {
          body = JSON.stringify(body);
      }
      option.body = body;
    }
    return fetch(url, option)
      .then(respone => {
        let json = respone.json();
        if(!respone.ok) {
          return Promise.reject(json);
        }
        return json;
      })
      .then(json=> {
          if(!json.success) {
            /*Modal.error({
              content: json.message
            })*/
          }
          return json;
        },
        error => ({ error: error.message || 'unexpect error'})
      )
}

export function URLParam(param) {
    var result = [];
    if(typeof param !== 'object') {
        throw new Error('expect object of URLParam');
    }
    for(let key in param) {
        result.push(`${key}=${param[key]}`);
    }
    return result.join('&');
}
