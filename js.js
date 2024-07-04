// Animate image containers
gsap.to('.imageContainer', {
  width: '100%',
  ease: 'Expo.easeInOut',
  duration: 2,
  stagger: 2,
  repeat: -1, // Infinite loop
  yoyo: true  // Reverse the animation direction
});

// Animate text
gsap.to('.text h1', {
  ease: 'Expo.easeInOut',
  delay: 2,
  duration: 2,
  top: '-100%',
  stagger: 2,
  repeat: -1, // Infinite loop
  yoyo: true  // Reverse the animation direction
});

const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.play();

// document.querySelectorAll('.imageContainer').forEach(function(ele){
//     gsap.to('ele',{
//         ease:"Expo.easeInOut",
//         width:"100%",
//         duration:2,
//         stagger:2
//     })

// })
  