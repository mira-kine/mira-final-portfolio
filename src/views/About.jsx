import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  overflow: hidden;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Montserrat';
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  margin-bottom: 10%;
  margin-right: 10%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .main-img {
    width: 80%;
    height: auto;
    position: absolute;
    top: 5%;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 78%;
    bottom: 12%;
  }

  .small-img-2 {
    width: 35%;
    position: absolute;
    left: 65%;
    bottom: 40%;
  }
`;

export default function About() {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        <p>
          I am a full stack software developer who cares about people and their
          stories. My background in mental health & biopsychology helps me stay
          grounded in human connection and user experience while pursuing
          accessibility, equity and soulfulness in the digital world.{' '}
        </p>{' '}
        <br />
        <p>Languages: JavaScript, HTML, CSS, TypeScript, Python, SQL</p>
        <br />
        <p>
          Libraries + Frameworks: React, Redux, Node.js, Tailwind CSS, jQuery,
          Express, Flask
        </p>
        <br />
        <p>
          Testing: TDD, Jest, QUnit, Snapshot, Supertest, Mock Service Worker
        </p>
        <br />
        <p>Databases: PostgreSQL, NoSQL, SQL</p>
        <br />
        <p>
          Dev Practices: Agile Scrum Methodology, Pair & mob programming,
          RESTful routing
        </p>
        <br />
        <p>
          Tools: GitHub, VSCode, Heroku, Netlify, Postman, Miro, Photoshop,
          Procreate, Canva, Beekeeper
        </p>
      </Left>
      <Right>
        <img
          src="../assets/creative_headshot_mk.jpg"
          alt="Mira's creative headshot"
          className="main-img"
        />
        <img
          data-scroll
          data-scroll-speed="5"
          src="../assets/fried_egg.png"
          alt="fried egg drawing"
          className="small-img-1"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src="../assets/croissant.png"
          alt="croissant drawing"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
}
