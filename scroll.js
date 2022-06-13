gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({scrollTrigger: {
    trigger: ".text-container",
    start: 0,
    end: "+=8000", // stay pinned for 1000 pixels (make this whatever you want)
    markers: {startColor: "#00000000", endColor: "#00000000", fontSize: "12px"},
    scrub: true,
    pin: true,
    
  }});

let stayTime = 2; // seconds between each text flip on the timeline (not literally seconds on screen - we're just spacing them out on the timeline)
let textElements = gsap.utils.toArray(".text" ); // get an Array of all the ".text" elements
// let scrolltextElements = gsap.utils.toArray(".sticky-text-left")

// loop through each text element and add an autoAlpha flip at the appropriate times on the timeline
textElements.forEach((el, i) => {
  tl.set(el, {autoAlpha: 1}, i * stayTime);
  if (i !== 0) { // if it's the first one, we don't need to toggle the previous one off.
    tl.set(textElements[i - 1], {autoAlpha: 0}, i * stayTime);
  }
});
// add some space at the end of the timeline so the last one stays for the correct duration before things get unpinned.
tl.set({}, {delay: stayTime});

// scrolltextElements.forEach((el, i) => {
//     tl.set(el, {autoAlpha: 1}, i * stayTime);
//     if (i !== 0) { 
//       tl.set(textElements[i - 1], {autoAlpha: 0}, i * stayTime);
//     }
//   });
  
//   tl.set({}, {delay: stayTime});