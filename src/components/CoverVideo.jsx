import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// put video for now
const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  positions: relative;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: 'Montserrat';
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-family: 'Sulphur Point';
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function CoverVideo() {
  return (
    <div>
      <VideoContainer>
        <DarkOverlay />
        <Title variants={container} initial="hidden" animate="show">
          <div aria-label="Mira Kinebuchi name title">
            <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
              Mira Kinebuchi
            </h1>
          </div>
          <h2
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
            aria-label="software engineer sub-title"
          >
            Software Engineer
          </h2>
        </Title>
        <img src="../assets/sunflower-pc.jpg" alt="mp4 of walking girl" />
      </VideoContainer>
    </div>
  );
}
