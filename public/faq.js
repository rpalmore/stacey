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
// TweenLite.to('.image', .2, {autoAlpha:1, delay:.1});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  var options = {
    menuWidth: 400, 
    closeOnClick: true,
    draggable: true
  };
});

// TO DO: CLEAN ALL OF THIS UP SO NO REPETITION

var q1 = document.getElementById("q1"),
    q2 = document.getElementById("q2"),
    q3 = document.getElementById("q3"),
    q4 = document.getElementById("q4"),
    q5 = document.getElementById("q5"),
    q6 = document.getElementById("q6"),
    q7 = document.getElementById("q7"),
    q8 = document.getElementById("q8");
    q9 = document.getElementById("q9");
    btn = document.getElementsByClassName("btn-floating");
    extra = document.getElementById("extraPadding");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    TweenLite.to(window, .7, {scrollTo:{y:"nav"}})
  }
};

q1.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer1", offsetY:5}});
};

q2.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer2", offsetY:5}});
};

q3.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer3", offsetY:5}});
};

q4.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer4", offsetY:5}});
};

q5.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer5", offsetY:5}});
};

q6.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer6", offsetY:5}});
};

q7.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer7", offsetY:5}});
};

q8.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer8", offsetY:5}});
};

q9.onclick = function() {
  TweenLite.to(window, .7, {scrollTo:{y:"#answer9", offsetY:5}});
};





  


