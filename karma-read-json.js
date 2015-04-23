var readJSON = function (url) {
  url = readJSON.base + url;
  
  var xhr = new XMLHttpRequest();
  var json = null;
  
  xhr.open("GET", url, false);
  
  xhr.onload = function (e) {
    if (xhr.status === 200) {
      json = JSON.parse(xhr.responseText);
    }
    
    else {
      console.error('readJSON', url, xhr.statusText);
    }
  };
  
  xhr.onerror = function (e) {
    console.error('readJSON', url, xhr.statusText);
  };
  
  xhr.send(null);
  return json;
};

readJSON.base = '/base/';

try {
  if (exports) {
    exports.readJSON = readJSON;
  }
}

catch (error) {
  //exports not available so not loaded by require
}
