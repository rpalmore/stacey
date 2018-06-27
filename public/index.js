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
     
// this will replay video ... but could be used to load poster?
// vid.addEventListener('ended', function() {
//   vid.load();     
// });

TweenLite.to('#welcome', 1, {autoAlpha:1, delay:.2});
// TweenLite.to('.header', 1, {autoAlpha:0.5, delay:3});
// TweenLite.to('.image', 1, {autoAlpha:1, delay:1});
// TweenLite.to('#welcome', .5, {autoAlpha: 0, delay: 3});
// TweenLite.to('#welcome', .5, {autoAlpha: 1, width: 'auto', top: 0, delay:3.5});
// TweenLite.to('.menuBoxes', 1, {autoAlpha:1, delay:3});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  var options = {
  	menuWidth: 400, 
  	closeOnClick: true,
  	draggable: true
  };
  console.log(elems);
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


q1.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer1", offsetY:5}});
};

q2.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer2", offsetY:5}});
};

q3.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer3", offsetY:5}});
};

q4.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer4", offsetY:5}});
};

q5.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer5", offsetY:5}});
};

q6.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer6", offsetY:5}});
};

q7.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer7", offsetY:5}});
};

q8.onclick = function() {
  console.log("clicked!");
  TweenLite.to(window, .7, {scrollTo:{y:"#answer8", offsetY:5}});
};
