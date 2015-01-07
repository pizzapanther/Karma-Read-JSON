function readJSON (url) {
  url = '/base/' + url;
  
  var xhr = new XMLHttpRequest();
  var json = null;
  
  xhr.open("GET", url, false);
  
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        json = JSON.parse(xhr.responseText);
      }
      
      else {
        console.error('ReadFile', xhr.statusText);
      }
    }
  };
  
  xhr.onerror = function (e) {
    console.error('ReadFile', xhr.statusText);
  };
  
  xhr.send(null);
  return json;
}
