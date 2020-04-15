var MyHTMLIsland = MyHTMLIsland || {
  saySomething: function (message) {
    alert(message);
  },
  printList: function (array) {
    var div  = document.getElementById('myHtmlIsland'),
        p,
        i, 
        max  = array.length;
 
    for(i = 0; i < max; i += 1) {
      p = document.createElement('p');
      p.appendChild(document.createTextNode(array[i].text));  
      div.appendChild(p);
    }
  },
  addCallback: function (callback) {
    var div    = document.getElementById('myHtmlIsland'), 
        input  = document.createElement('input');
    input.type = 'button'
    input.value = 'Fire Event';
    input.onclick = function () {
      callback.fireEvent('Event','Hello Web Dynpro');
    };
    div.appendChild(input);
    
    callback.addEventListener('contextmenu', function (e) {
       alert('Custom context menu handling');
       e.cancelBubble = true;
    });    
    
  }
};