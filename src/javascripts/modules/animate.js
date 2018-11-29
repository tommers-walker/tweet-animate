import 'gsap';

const animate = {
  init() {
    TweenMax.to('#wing', 0.05, {
      rotationY: "30",
      transformOrigin: "top right",
      repeat: 15,
      yoyo: true,
      ease: Power0.easeNone
    })
  }
}

export { animate }
