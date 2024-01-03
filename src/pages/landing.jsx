import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

import cardImageOne from "../assets/images/hero/card-image-one.svg";
import cardImageTwo from "../assets/images/hero/card-image-two.svg";
import cardImageThree from "../assets/images/hero/card-image-three.svg";
import cardImageFour from "../assets/images/hero/card-image-four.svg";

import revolutionOne from "../assets/images/revolution/revolution-one.svg";
import revolutionTwo from "../assets/images/revolution/revolution-two.svg";
import revolutionThree from "../assets/images/revolution/revolution-three.svg";
import assistanceText from "../assets/images/revolution/assistance-text.svg";
import assistanceIcon from "../assets/images/revolution/assistance-icon.svg";
import avatar from "../assets/images/revolution/avatar.svg";
import star from "../assets/images/revolution/star.svg";
import smileOne from "../assets/images/revolution/smile-one.svg";
import smileTwo from "../assets/images/revolution/smile-two.svg";
import smileThree from "../assets/images/revolution/smile-three.svg";
import smileFour from "../assets/images/revolution/smile-four.svg";
import cross from "../assets/images/revolution/cross.svg";
import smile from "../assets/images/revolution/smile.svg";
import play from "../assets/images/revolution/play.svg";
import getStarted from "../assets/images/revolution/get-started.svg";

import exploreMiniLeft from "../assets/images/explore/explore-mini-icon-left.svg";
import exploreMiniMiddle from "../assets/images/explore/explore-mini-icon-middle.svg";
import exploreMiniRight from "../assets/images/explore/explore-mini-icon-right.svg";
import exploreRightTop from "../assets/images/explore/explore-right-top.svg";
import exploreRightTop2 from "../assets/images/explore/explore-right-top-2.svg";
import exploreRightMiddle from "../assets/images/explore/explore-right-middle.svg";
import exploreRightMiddle2 from "../assets/images/explore/explore-right-middle-2.svg";
import exploreRightBottom from "../assets/images/explore/explore-right-bottom.svg";
import exploreRightBottomTwo from "../assets/images/explore/explore-right-bottom-2.svg";

// add ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const cardRef = useRef(null);
  const cardRefTwo = useRef(null);
  const cardRefThree = useRef(null);
  const cardRefFour = useRef(null);
  const firstPageRef = useRef(null);
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);
  const navRef = useRef(null);
  const exploreRightRef = useRef(null);

  const [splitTextInstance, setSplitTextInstance] = useState(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    const timelineTwo = gsap.timeline();
    const timelineThree = gsap.timeline();
    const timelineFour = gsap.timeline();
    const timelineGetStarted = gsap.timeline();
    const anchorText = new SplitType("h1.anchor-text", { types: "chars" });
    setSplitTextInstance(anchorText);
   
    gsap.fromTo(
      anchorText.chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );

    /**
     * First image animation
     */
    // Initial position (off-screen) and tilt
    gsap.set(cardRef.current, { y: "100%", rotate: -10 });

    // Spin animation
    timeline.to(cardRef.current, { rotate: 10, duration: 0.5 });

    // Slide up animation after a delay
    timeline.to(cardRef.current, { y: -280, duration: 0.3, delay: 1 });

    // Fade out and remove from DOM
    timeline.to(cardRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        cardRef.current.style.display = "none";
      },
    });

    /**
     * Second image animation
     */
    gsap.set(cardRefTwo.current, { y: "100%", rotate: -10 });

    // Spin animation
    timelineTwo.to(cardRefTwo.current, { rotate: 10, duration: 0.5 });

    // Slide up animation after a delay
    timelineTwo.to(cardRefTwo.current, { y: -280, duration: 0.3, delay: 2 });

    // Fade out and remove from DOM
    timelineTwo.to(cardRefTwo.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        cardRefTwo.current.style.display = "none";
      },
    });

    /**
     * Third image animation
     */
    gsap.set(cardRefThree.current, { y: "100%", rotate: -10 });

    // Spin animation
    timelineThree.to(cardRefThree.current, { rotate: 10, duration: 0.5 });

    // Slide up animation after a delay
    timelineThree.to(cardRefThree.current, {
      y: -280,
      duration: 0.3,
      delay: 3,
    });

    // Fade out and remove from DOM
    timelineThree.to(cardRefThree.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        cardRefThree.current.style.display = "none";
      },
    });

    /**
     * Fourth image animation
     */
    gsap.set(cardRefThree.current, { y: "100%", rotate: -10 });

    // Spin animation
    timelineFour.to(cardRefFour.current, { rotate: 10, duration: 0.5 });

    // Slide up animation after a delay
    timelineFour.to(cardRefFour.current, { y: -280, duration: 0.3, delay: 4 });

    // Fade out and remove from DOM
    timelineFour.to(cardRefFour.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        cardRefFour.current.style.display = "none";
        secondPageRef.current.style.display = "block";
        firstPageRef.current.style.display = "none";
        // Animate the top text "REVOLUTIONILIZING"
        gsap.from(".revolution-hero h1", {
          x: 500,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // Use gsap.to with x: 0 as the starting point
            gsap.to(".revolution-hero h1", {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });

        // Animate the middle text: 'Dental care'
        gsap.from(".dental-care", {
          x: -500,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // Use gsap.to with x: 0 as the starting point
            gsap.to(".dental-care", {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });

        // Animate the bottom text 'With technology'
        gsap.from(".with-tech h2", {
          x: 500,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          // delay: 4.5,
          onComplete: () => {
            // Use gsap.to with x: 0 as the starting point
            gsap.to(".with-tech h2", {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => {
                secondPageRef.current.style.display = "none";
                navRef.current.style.display = "none";
                thirdPageRef.current.style.display = "block";
              },
            });

            timelineGetStarted
              .from(".near-footer_getstarted", {
                y: 80,
                opacity: 0,
                duration: 0.5,
              })
              .to(".near-footer_getstarted", {
                y: 0,
                opacity: 1,
                duration: 0.5,
              });
          },
        });
      },
    });

    thirdPageRightScrollEffect();
  }, [secondPageRef]);

  const thirdPageRightScrollEffect = () => {
    if (exploreRightRef.current) {
      // Get the right container
      const exploreRightContainer = exploreRightRef.current;

      // Define the animation for each image-buttonwrapper
      const animateImage = (element, index) => {
        const direction = index % 2 === 0 ? 1 : -1; // 1 for up, -1 for down
        gsap.to(element, {
          y: direction * 1000,
          duration: 10,
          repeat: -1,
          ease: "linear",
          immediateRender: true,
        });
      };

      // Loop through each image-buttonwrapper and apply the animation
      const imageButtonWrappers = exploreRightContainer.querySelectorAll(
        ".image-buttonwrapper"
      );

      imageButtonWrappers.forEach((imageButtonWrapper, index) => {
        animateImage(imageButtonWrapper, index);
      });

      // Use ScrollTrigger to trigger animations based on the scroll position
      ScrollTrigger.create({
        trigger: exploreRightContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="container-wrapper container-pagethree">
        <div ref={navRef} className="navbar">
          <NavBar />
        </div>

        {/* HERO SECTION START HERE----- */}
        <div className="hero" ref={firstPageRef}>
          <h1 className="text-center our-text">OUR ADVANTAGES</h1>
          <div className="hero_overlay">
            <div className="animated-imagewrapper" ref={cardRefFour}>
              <img src={cardImageFour} alt="card-image-four" />
            </div>
            <div className="animated-imagewrapper" ref={cardRefThree}>
              <img src={cardImageThree} alt="card-image-three" />
            </div>
            <div className="animated-imagewrapper" ref={cardRefTwo}>
              <img src={cardImageTwo} alt="card-image-two" />
            </div>
            <div className="animated-imagewrapper" ref={cardRef}>
              <img src={cardImageOne} alt="card-image-one" />
            </div>
          </div>
        </div>
        {/* ----END HERE HERO SECTION */}

        {/* REVOLUTION SECTION START HERE----- */}
        <section className="container mx-auto revolution" ref={secondPageRef}>
          <div className="revolution-hero flex items-center justify-center gap-4">
            <h1>REVOLUTIONILIZING</h1>
            <div>
              <div className="flex items-center gap-2">
                <img src={revolutionOne} alt="left-revolution-image" />
                <img src={revolutionTwo} alt="middle-revolution-image" />
                <img src={revolutionThree} alt="right-revolution-image" />
              </div>
              <p>
                Modern Solutions,<br></br> Timeless Smiles
              </p>
            </div>
          </div>

          <div className="mt-5 dental-care container mx-auto flex items-center gap-4 justify-center">
            <div className="dental-care_images flex items-center gap-2">
              <img src={assistanceText} alt="assistance-text" />
              <img src={assistanceIcon} alt="assistance-icon" />
            </div>
            <div className="d-flex items-center gap-4">
              <h2>DENTAL</h2>
              <div className="dental-care_textimage">
                <img className="img-fluid" src={avatar} alt="avatar" />
                <img className="img-fluid" src={star} alt="star-icon" />
              </div>
              <h2>CARE</h2>
            </div>
          </div>
          <div className="container mx-auto with-tech flex items-center justify-center gap-2">
            <h2>WITH TECHNOLOGY</h2>
            <div className="with-tech_images">
              <img src={smileOne} alt="smile-image-1" />
              <img src={smileTwo} alt="smile-image-2" />
              <img src={smileThree} alt="smile-image-3" />
              <img src={smileFour} alt="smile-image-4" />
            </div>
            <div className="with-tech_cross mb-4">
              <img src={cross} alt="with-tech-cross" />
            </div>
          </div>
          <div className="near-footer container mx-auto flex justify-start">
            <div className="near-footer_image">
              <img
                className="img-fluid"
                src={smile}
                alt="with-tech-smile-image"
              />
              <img className="img-fluid" src={play} alt="play-image" />
            </div>
            <img
              className="near-footer_getstarted"
              src={getStarted}
              alt="Get Started"
            />
          </div>
        </section>
        {/* ----END HERE REVOLUTION SECTION */}

        {/* EXPLORE SECTION START HERE----- */}
        <div className="last-page" ref={thirdPageRef}>
          <section className="container mx-auto explore flex flex-wrap justify-between">
            <div className="explore_left">
              <div className="flex items-center gap-2">
                <img src={exploreMiniLeft} alt="left-mini-icon" />
                <img src={exploreMiniMiddle} alt="middle-mini-icon" />
                <img src={exploreMiniRight} alt="right-mini-icon" />
              </div>
              <div className="content-wrapper">
                <h2>EXPLORE OUR SERVICE, MAKE YOUR SMILE SHINE</h2>
                <div className="content-wrapper_buttons flex gap-3">
                  <button>Get The App</button>
                  <button>Meet The Team</button>
                </div>
              </div>
              <Footer />
            </div>
            <div className="explore_right" ref={exploreRightRef}>
              <div className="flex gap-4">
                <div className="image-buttonwrapper">
                  <img src={exploreRightTop} alt="explore-right-top-image" />
                  <button>Toothbrush Tracking</button>
                </div>
                <div className="image-buttonwrapper">
                  <img src={exploreRightTop2} alt="explore-right-top-2-image" />
                  <button>Oral Care Guides</button>
                </div>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="image-buttonwrapper">
                  <img src={exploreRightMiddle} alt="explore-middle-image" />
                  <button>Dental Health Records</button>
                </div>
                <div className="image-buttonwrapper">
                  <img
                    src={exploreRightMiddle2}
                    alt="explore-middle-image-two"
                  />
                  <button>Appointment Scheduling</button>
                </div>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="image-buttonwrapper">
                  <img
                    src={exploreRightBottom}
                    alt="explore-right-bottom-image"
                  />
                  <button>Oral Health Assessment</button>
                </div>
                <div className="image-buttonwrapper">
                  <img
                    src={exploreRightBottomTwo}
                    alt="explore-right-bottom-image-two"
                  />
                  <button>Medication Tracking</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*----END HERE EXPLORE SECTION*/}
      </div>

    </div>
  );
};

export default LandingPage;
