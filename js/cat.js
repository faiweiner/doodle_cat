var movePixels = 1;
var delayMs = 1;
var catTimer = null;

var turn180Deg = function(img) {
  var image = img;
  image.className = 'flip-horizontal';
};

function catWalk() {
  var img = document.getElementById('walking_cat');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px'; 
  turn180Deg(img)
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = null;
    img.style.right = '0px';
    img.className = '';
  };
  var currentRight = parseInt(img.style.right);
  img.style.right = (currentRight + movePixels) + 'px';
  if (currentRight > (window.innerWidth-img.width)) {
    img.style.right = null;
    img.style.left = '0px';
    img.className = '';
  };
};

function startCatWalk() {
  window.clearTimeout(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
  var img = document.getElementById('walking_cat');
  img.src = "img/rollcat_transparent.gif";
};

function fastCatWalk() {
  img.src = "http://25.media.tumblr.com/14406fb11346aaa3cde5613e54ce2e59/tumblr_mhcwcr4oC51qgtfzjo1_250.gif";
  var currentLeft = parseInt(img.style.left + 5);
  img.style.left = (currentLeft + movePixels) + 'px';
};

function stopCatWalk() {
  window.clearTimeout(catTimer);
  var img = document.getElementById('walking_cat');
  img.src = "img/standing_cat.gif";
};

var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startCatWalk);

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopCatWalk);

var hopBunny = document.getElementById('hop_bunny');
hopBunny.addEventListener('onLoad',turn180Deg(hopBunny));
window.setInterval(hopBunny, delayMs)

var flyingCat = document.getElementById('flying_cat');
