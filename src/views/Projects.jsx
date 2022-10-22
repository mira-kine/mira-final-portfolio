import React from 'react';
import styled from 'styled-components';

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
`;

export default function Projects() {
  return (
    <Section>
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        Projects
      </Title>
      <Left>text</Left>
    </Section>
  );
}
