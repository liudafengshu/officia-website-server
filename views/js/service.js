(function ($) {
  ScrollTrigger.saveStyles(
    ".AboutRedesignBx-card, .AboutRedesignBx-img, .CardText-text, .AboutRedesignBx-item, .CardText-item"
  );

  ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function () {
      //AboutCard
      const AboutCard = gsap.timeline({
        scrollTrigger: {
          trigger: ".AboutRedesign",
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: ".AboutRedesign",
        },
      });
      AboutCard.to(".AboutRedesignBx-item.first .AboutRedesignBx-card", {
        height: 80 + "vh",
        translateX: -50 + "%",
        translateY: -10 + "%",
        duration: 10,
      })
        .to(
          ".AboutRedesignBx-item.center .AboutRedesignBx-card",
          { height: 80 + "vh", duration: 10 },
          "-=10"
        )
        .to(
          ".AboutRedesignBx-item.card .AboutRedesignBx-card",
          { height: 80 + "vh", duration: 10 },
          "-=10"
        )

        .to(
          ".AboutRedesignBx-item.last .AboutRedesignBx-card",
          {
            height: 80 + "vh",
            translateX: 50 + "%",
            translateY: 10 + "%",
            duration: 10,
          },
          "-=10"
        )
        .to(
          ".AboutRedesignBx-img",
          {
            skewX: 0 + "deg",
            skewY: 0 + "deg",
            rotateX: 0 + "deg",
            rotateY: 0 + "deg",
            rotateZ: 0 + "deg",
            scale: 1,
            duration: 10,
          },
          "-=10"
        )
        .to(".CardText-text", { opacity: 0, duration: 5 }, "-=10")
        // .to(
        //   ".CardText-item:first-child",
        //   { left: 43 + "%", duration: 5 },
        //   "-=10"
        // )
        .to(".CardText-text.item-2", { opacity: 1, duration: 5 }, "-=10")
        // .to(
        //   ".CardText-item:last-child",
        //   { left: 43 + "%", duration: 5 },
        //   "-=10"
        // )
        .set({}, {}, "+=5")
        .to(".AboutRedesignBx-item.first", { opacity: 0, duration: 5 })
        .to(".AboutRedesignBx-item.last", { opacity: 0, duration: 5 })
        .to(".AboutRedesignBx-item.center", { opacity: 0, duration: 5 }, "-=5")
        .to(".AboutRedesignBx-item.card", { opacity: 1, duration: 5 }, "-=5")

        .set({}, {}, "+=10");

      const TopBtns = gsap.timeline({
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top bottom",
          toggleClass: {
            className: "is-Stop",
            targets: ".TopButton",
          },
        },
      });
    },

    // small
    "(max-width: 1024px)": function () {
      //AboutCard
      const AboutCard = gsap.timeline({
        scrollTrigger: {
          trigger: ".AboutRedesign",
          start: "top top",
          end: "+=800",
          scrub: 1,
          pin: ".AboutRedesign",
        },
      });
      AboutCard.to(".AboutRedesignBx-item.first .AboutRedesignBx-card", {
        height: 50 + "vh",
        translateX: -50 + "%",
        translateY: -10 + "%",
        duration: 10,
      })
        .to(
          ".AboutRedesignBx-item.center .AboutRedesignBx-card",
          { height: 50 + "vh", duration: 10 },
          "-=10"
        )
        .to(
          ".AboutRedesignBx-item.card .AboutRedesignBx-card",
          { height: 50 + "vh", duration: 10 },
          "-=10"
        )
        .to(
          ".AboutRedesignBx-item.last .AboutRedesignBx-card",
          {
            height: 50 + "vh",
            translateX: 50 + "%",
            translateY: 10 + "%",
            duration: 10,
          },
          "-=10"
        )
        .to(".AboutRedesignBx-item", { left: 50 + "%", duration: 10 }, "-=10")
        .to(
          ".AboutRedesignBx-img",
          {
            skewX: 0 + "deg",
            skewY: 0 + "deg",
            rotateX: 0 + "deg",
            rotateY: 0 + "deg",
            rotateZ: 0 + "deg",
            scale: 1,
            duration: 10,
          },
          "-=10"
        )
        .to(".CardText-text", { opacity: 1, duration: 5 }, "-=10")
        // .to(".CardText-item:first-child",{top:54+'%', duration: 5},"-=10")
        // .to(".CardText-item:last-child",{top:43+'%', duration: 5},"-=10")
        .to(".CardText-text", { opacity: 0, duration: 5 }, "-=10")
        .to(".CardText-text.item-2", { opacity: 1, duration: 5 }, "-=10")
        .set({}, {}, "+=5")
        .to(".AboutRedesignBx-item.first", { opacity: 0, duration: 5 })
        .to(".AboutRedesignBx-item.last", { opacity: 0, duration: 5 })
        .to(".AboutRedesignBx-item.center", { opacity: 0, duration: 5 }, "-=5")
        .to(".AboutRedesignBx-item.card", { opacity: 1, duration: 5 }, "-=5")
        .set({}, {}, "+=10");

      const TopBtns = gsap.timeline({
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top bottom",
          toggleClass: {
            className: "is-Stop",
            targets: ".TopButton",
          },
        },
      });
    },
  });
})(jQuery);
