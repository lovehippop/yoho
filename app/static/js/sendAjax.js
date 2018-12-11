function sendAjax(url, obj) {
    const xhr = new XMLHttpRequest();
    const _default = {
        method: 'GET',
        Data: null
        
    };
    if(obj){
        for (var i in _default) {
            if (i in obj) {
                _default[i] = obj[i];
            }
        }
    }
   
    _default.method = _default.method.toUpperCase();
    if (_default.method == 'GET') {
        let keyValue = url.indexOf('?') == -1 ? "?" : "&";
        url += keyValue;
        for (var i in _default.Data) {
            url += `${i}=${_default.Data[i]}` + "&";

        }
        url += `_=${Date.now()}`;
        _default.Data = null;

    } else if (_default.method == 'POST') {
        _default.Data = JSON.stringify(_default.Data);
    }


    xhr.open(_default.method, url, true);
    xhr.send(_default.Data);
    return new Promise(function(resolve,reject){
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                     let data=xhr.response;
                     resolve(data);

                }else{
                    let data =xhr.response;
                    reject(data);
                }
               
            }
        }
    })
  

}