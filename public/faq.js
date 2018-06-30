// FAQ Greensock ScrollTo
var btn = document.getElementsByClassName("btn-floating");
var q = document.getElementsByClassName("questions");
var answer = document.getElementsByClassName("qRepeat");


for (var i = 0; i < q[0].children.length; i++) {
  (function(index) {
    q[0].children[i].onclick = function() {
      let m = (index);
      TweenLite.to(window, .7, {scrollTo:{y:answer[m], offsetY:7}});
    }   
  })(i);
    btn[i].onclick = function() {
    TweenLite.to(window, .7, {scrollTo:{y:"nav"}})
  };
};



  


