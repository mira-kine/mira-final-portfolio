import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import project1 from '../images/shop-ade-title.jpg';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  overflow: hidden;
  margin: 0 auto;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Montserrat';
  font-weight: 300;
  width: 35%;
  font-size: 5rem;

  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  z-index: 10;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  //   width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;

const Project = ({ img, title = '' }) => {
  return (
    <Item
      initial={{
        filter: 'grayscale(100%)',
      }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

export default function Projects() {
  // register gsap scroll trigger
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);
  console.log('horizontalRef', horizontalRef);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let timeline1 = gsap.timeline();

    setTimeout(() => {
      timeline1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      });

      // Horizontal Scrolling
      timeline1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: 'none',
      });
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <Section data-scroll-container ref={ref}>
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        Projects
      </Title>
      <Left>text</Left>
      <Right ref={horizontalRef}>
        <Project img={project1} title="abc" />
        <Project img={project1} title="abc" />
        <Project img={project1} title="abc" />
        <Project img={project1} title="abc" />
        <Project img={project1} title="abc" />
        <Project img={project1} title="abc" />
      </Right>
    </Section>
  );
}
