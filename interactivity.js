let btn = document.querySelector('.x-btn');

function closeTopBar() {
  let topBar = document.querySelector('.top-bar-notification');
  topBar.parentNode.removeChild(topBar);
}

btn.addEventListener("click", closeTopBar);