import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../../components/CoverPage/CoverVideo';
import NavBar from '../../components/NavBar/NavBar';
import Logo from '../../components/Logo/Logo';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export default function Home() {
  return (
    <Section className="home-section">
      <CoverVideo />
      <Logo />
      <NavBar />
    </Section>
  );
}
