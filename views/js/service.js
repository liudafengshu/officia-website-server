(function($){
    ScrollTrigger.saveStyles(".AboutHeroBx-card, .AboutHeroBx-img, .CardText-text, .AboutHeroBx-item, .CardText-item");
    
    ScrollTrigger.matchMedia({
        
      // large
      "(min-width: 1025px)": function() {
        //AboutCard
        const AboutCard = gsap.timeline({
          scrollTrigger: {
            trigger: ".AboutHero",
            start: "top top",
            end: "+=1200",
            scrub: 1,
            pin:".AboutHero",
          }
        })
        AboutCard
        .to(".AboutHeroBx-item.first .AboutHeroBx-card",{height:50+'vh',translateY:35+'%', duration: 10})
        .to(".AboutHeroBx-item.center .AboutHeroBx-card",{height:50+'vh', duration: 10},"-=10")
        .to(".AboutHeroBx-item.last .AboutHeroBx-card",{height:50+'vh',translateY:-35+'%', duration: 10},"-=10")
        .to(".AboutHeroBx-img",{rotateX:0+'deg', rotateY:0+'deg', rotateZ:0+'deg', duration: 10},"-=10")
        .to(".CardText-text",{opacity:0, duration: 5},"-=10")
        .to(".CardText-item:first-child",{top:43+'%', duration: 5},"-=10")
        .to(".CardText-text.item-2",{opacity:1, duration: 5},"-=10")
        .to(".CardText-item:last-child",{top:43+'%', duration: 5},"-=10")
        .set({},{},"+=5")
        .to(".AboutHeroBx-item.first",{opacity:0, duration: 5})
        .to(".AboutHeroBx-item.center",{opacity:0, duration: 5},"-=5")
        .set({},{},"+=10")
        
        const TopBtns = gsap.timeline({
          scrollTrigger: {
            trigger: ".site-footer",
            start: "top bottom",
            toggleClass: { 
                className: "is-Stop", 
                targets: ".TopButton" 
            }
          }
        })
      },
    
      // small
      "(max-width: 1024px)": function() {
        //AboutCard
        const AboutCard = gsap.timeline({
          scrollTrigger: {
            trigger: ".AboutHero",
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin:".AboutHero",
          }
        })
        AboutCard
        .to(".AboutHeroBx-item.first .AboutHeroBx-card",{height:40+'vh',translateY:35+'%', duration: 10})
        .to(".AboutHeroBx-item.center .AboutHeroBx-card",{height:40+'vh', duration: 10},"-=10")
        .to(".AboutHeroBx-item.last .AboutHeroBx-card",{height:40+'vh',translateY:-35+'%', duration: 10},"-=10")
        .to(".AboutHeroBx-item",{left:50+'%', duration: 10},"-=10")
        .to(".AboutHeroBx-img",{rotateX:0+'deg', rotateY:0+'deg', rotateZ:0+'deg', duration: 10},"-=10")
        .to(".CardText-text",{opacity:1, duration: 5},"-=10")
            // .to(".CardText-item:first-child",{top:54+'%', duration: 5},"-=10")
        // .to(".CardText-item:last-child",{top:43+'%', duration: 5},"-=10")
        .to(".CardText-text",{opacity:0, duration: 5},"-=10")
        .to(".CardText-text.item-2",{opacity:1,top:54+'%', duration: 5},"-=10")
        .set({},{},"+=5")
        .to(".AboutHeroBx-item.first",{opacity:0, duration: 5})
        .to(".AboutHeroBx-item.center",{opacity:0, duration: 5},"-=5")
        .set({},{},"+=10")
        
        const TopBtns = gsap.timeline({
          scrollTrigger: {
            trigger: ".site-footer",
            start: "top bottom",
            toggleClass: { 
                className: "is-Stop", 
                targets: ".TopButton" 
            }
          }
        })
      },
        
    }); 
    
    })(jQuery);