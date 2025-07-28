anime({
    targets: 'header',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
});

anime({
  targets: '.gallery img',
  translateY: [100, 0],
  opacity: [0, 1],
  delay: anime.stagger(100),
  easing: 'easeOutExpo',
  once: true,
  scrollTrigger: {
    trigger: '.gallery',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  },
});

anime({
  targets: '.content',
  translateX: [-200, 0],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  once: true,
  scrollTrigger: {
    trigger: '.content',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  },
});