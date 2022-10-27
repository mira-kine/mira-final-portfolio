import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export default function Home() {
  return (
    <Section id="home">
      <CoverVideo />
      <Logo />
      <NavBar />
    </Section>
  );
}
