const vid = document.getElementById('welcome'); 

toggleVid = () => {
  if (vid.paused) {
	vid.play();
	console.log('Video playing');
  } else {
	vid.pause();
	console.log('Video paused');
  }
};

TweenLite.to('#welcome', 1, {autoAlpha:1, delay:.2});
// TweenLite.to('.image', 1, {autoAlpha:1, delay:7});

// Materialize sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  var options = {
    menuWidth: 400, 
    closeOnClick: true,
    draggable: true
  };
});

// FAQ Greensock ScrollTo
var btn = document.getElementsByClassName("btn-floating");
var q = document.getElementsByClassName("questions");
var answer = document.getElementsByClassName("qRepeat");


for (var i = 0; i < q[0].children.length; i++) {
  (function(index) {
    q[0].children[i].onclick = function() {
      let m = (index);
      TweenLite.to(window, .7, {scrollTo:{y:answer[m], offsetY:5}});
    }   
  })(i);
    btn[i].onclick = function() {
    TweenLite.to(window, .7, {scrollTo:{y:"nav"}})
  };
};



  


