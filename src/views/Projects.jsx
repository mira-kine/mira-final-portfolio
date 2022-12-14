import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import project1 from '../images/shop-ade.jpg';
import project2 from '../images/alchemy-year-book.png';
import project3 from '../images/goodjob-ss.png';
import project4 from '../images/unspoken.png';
// import project5 from '../images/huu.jpg';

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
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;

const Project = ({ img, title = '', description = '' }) => {
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
      <p>{description}</p>
    </Item>
  );
};

export default function Projects() {
  // register gsap scroll trigger
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

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
    <Section data-scroll-container ref={ref} id="projects">
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        Personal & Group Projects
      </Title>
      <Left>These are some projects I have worked on!</Left>
      <Right ref={horizontalRef}>
        <a href="https://tcl-45-smart-shopping-list.firebaseapp.com/">
          <Project
            img={project1}
            title="ShopAde"
            description="Shop-ade is a retro arcade Pacman themed smart shopping list app that learns your buying habits and predicts the next time you may buy items."
          />
        </a>
        <a href="alchemyyearbook.netlify.app/">
          <Project
            img={project2}
            title="Yearbook"
            description="An app that bridges the gap in alumni networking for Alchemy students."
          />
        </a>
        <a href="https://goodjob.dev/">
          <Project
            img={project3}
            title="GoodJob"
            description="An app that supports software developers in organizing their job application process."
          />
        </a>
        <a href="https://unspokenstories.netlify.app/">
          <Project
            img={project4}
            title="Unspoken"
            description="A place to write your stories, memories or unspoken words while listening to lofi beats. Sometimes all you need is to write it out."
          />
        </a>
        {/* <a href="https://github.com/hackforla/HomeUniteUs">
          <Project img={project5} title="HomeUnitesUs" />
        </a> */}
      </Right>
    </Section>
  );
}
