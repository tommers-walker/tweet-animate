import 'gsap';

const animate = {
  init() {
    const tweetIcon = document.querySelector('#tweet-icon');
    const tl = new TimelineMax({paused:true});

    tl
    .to('#bird-wing', 0.05, {
      rotationY: "30%",
      transformOrigin: "top right",
      repeat: 9,
      yoyo: true,
      ease: Power0.easeNone
    })
    .to(tweetIcon, 0.1, {
      y: "-50%",
      repeat: 1,
      yoyo: true,
      ease: Power1.easeOut
    }, 0)

    tweetIcon.addEventListener('mouseenter', function(e) {
      tl.restart();
    });
  }
}

export { animate }
