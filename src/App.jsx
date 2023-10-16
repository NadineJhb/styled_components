import React from 'react';
import styled from 'styled-components';

// you can use this example :)
const Card = styled.div`
  background: white;
  width: 600px;
  font-size: 1.8em;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 30%;
`;

const Image = styled.img`
  width: 100%;
    `;

const Snippet = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Title1 = styled.h1`
  font-size: 1.3em;
`;

const Title2 = styled.h2`
  font-size: 1.1em;

`;

const Copy = styled.p`
  font-size: 1em;
`;

// create the styled component Ul of a ul and apply these rules:  display: flex; list-style-type: none;
// create the styled component Title of an h1 and apply these rules:  text - align: center; color: #d41f1f;

function App() {
  return (
    // replace the html tags below where necessary with the created styled components
    <Card>
      <ImageDiv>
        <Image src="/doggie.jpg"/>
      </ImageDiv>
      <Snippet>
        <Title1>Doggie</Title1>
        <Title2>Le chien du futur</Title2>
        <Copy>This is an example of Styled Component</Copy>
      </Snippet>
    </Card>
  );
}

export default App;
