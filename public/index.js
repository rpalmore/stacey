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
TweenLite.to('.image', 1, {autoAlpha:1, delay:1});
// TweenLite.to('#welcome', .5, {autoAlpha: 0, delay: 3});
// TweenLite.to('#welcome', .5, {autoAlpha: 1, width: 'auto', top: 0, delay:3.5});
// TweenLite.to('.menuBoxes', 1, {autoAlpha:1, delay:3});