function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-showreel', {
    events: { 'onStateChange': onPlayerStateChange }
  });
}

function onPlayerStateChange(event) {
  if (event.data == 1) {
    document.getElementById("header-showreel").pause();
  }
}


window.setTimeout(onYouTubeIframeAPIReady, 1000)
