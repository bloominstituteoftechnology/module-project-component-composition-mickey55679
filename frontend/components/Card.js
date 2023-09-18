import React from 'react'
import Figure from './Figure';
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(to top, #dfe9f3 0%, white 100%);
  box-shadow: 36px 10px 20px rgba(0, 0, 0, 0.2);

  h2 {
    color: ${(pr) => pr.$color};
    font-size: 2.5em;
    margin: 0 0 1rem 0;
  }
  p {
    margin: 0 0 1.5rem 0;

    &::first-line {
      font-size: 1.5em;
    }
  }
`;

export default function Card({ title, text, imageURL, date }) {
  return (
    <StyledCard $color="orange" className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure imageURL={imageURL} caption={date} />
    </StyledCard>
  );
}
