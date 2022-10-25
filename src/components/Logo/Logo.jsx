import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;
`;

export default function Logo() {
  return (
    <Container>
      {/* how to make link accessible? */}
      <Link to="/">
        <h2>Back to top</h2>
      </Link>
    </Container>
  );
}
