function list(arr,hrefmodel) {
document.body.innerHTML += "<ul></ul>";
  var ul = document.getElementsByTagName("ul");
   ul = ul[ul.length-1];
  for (var i=0; i<arr.length; i++) {
  ul.innerHTML += '<li><a "'+eval(hrefmodel)+'" download="Heb12-Updater">'+arr[i]+"</a></li>";
  }
}
