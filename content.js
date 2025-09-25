document.querySelectorAll('.card').forEach(card => {
  const progress = card.querySelector('.progress');
  let width = 0;
  let interval;

  function startAnimation() {
    interval = setInterval(() => {
      width += 1;
      if (width > 100) width = 0;
      progress.style.width = width + '%';
    }, 50); // adjust speed
  }

  function pauseAnimation() {
    clearInterval(interval);
  }

  card.addEventListener('mouseenter', pauseAnimation);
  card.addEventListener('mouseleave', startAnimation);

  startAnimation(); // start initially
});


const cardContainer = document.querySelector('.card-container');

let videos = [
  {title: "Video 1", img:"images/video1.jpg", src:"https://www.youtube.com/embed/VIDEO_ID_1"},
  {title: "Video 2", img:"images/video2.jpg", src:"https://www.youtube.com/embed/VIDEO_ID_2"},
  {title: "Video 3", img:"images/video3.jpg", src:"https://www.youtube.com/embed/VIDEO_ID_3"},
  // Add more video objects here
];

let index = 0;

function createVideoCard(video) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${video.img}" alt="${video.title}">
    <h3>${video.title}</h3>
    <div class="video-wrapper">
      <iframe src="${video.src}" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="timeline"><div class="progress"></div></div>
    <small>Uploaded: 25 Sep 2025</small>
  `;
  cardContainer.appendChild(card);

  // Timeline animation
  const progress = card.querySelector('.progress');
  let width = 0;
  let interval = setInterval(() => {
    width += 1;
    if(width > 100) width = 0;
    progress.style.width = width + '%';
  }, 50);

  card.addEventListener('mouseenter', ()=>clearInterval(interval));
  card.addEventListener('mouseleave', ()=>interval = setInterval(()=>{
    width += 1;
    if(width > 100) width = 0;
    progress.style.width = width + '%';
  },50));
}

// Load initial 3 videos
for(let i=0;i<3;i++) createVideoCard(videos[index++]);

// Auto-load next video when scroll near bottom
window.addEventListener('scroll', () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    if(index < videos.length) createVideoCard(videos[index++]);
  }
});
