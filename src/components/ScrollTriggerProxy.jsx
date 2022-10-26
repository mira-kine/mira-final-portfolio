// To use gsap with locomotive scroll, we will use a scroller proxy provided by gsap
// ScrollTrigger.scrollerProxy( scroller:String | Element, vars:Object ) ;
// Allows you to hijack the scrollTop and/or scrollLeft getters/setters for a particular scroller element so that you can implement things like smooth scrolling or other custom effects.
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useEffect } from 'react';

const ScrollTriggerProxy = () => {
  // first get instance of locomotive scroll
  const { scroll } = useLocomotiveScroll();

  // Then register scroll trigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      // locomotive scrolling element, which is app
      const element = scroll?.el;
      // on locomotive scrolling, update scroll trigger
      scroll.on('scroll', ScrollTrigger.update);

      // scroller proxy from gsap's scroller proxy with locomotive scroll
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: element.style.transform ? 'transform' : 'fixed',
      });
    }
    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);
  return null;
};

export default ScrollTriggerProxy;
