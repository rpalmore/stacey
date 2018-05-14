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

TweenLite.to('#welcome', .2, {autoAlpha:1, delay:.1});
TweenLite.to('.image', .2, {autoAlpha:1, delay:.1});

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





  


