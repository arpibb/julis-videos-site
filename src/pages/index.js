import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  #___gatsby{
    background-color: #232df1;
    height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #gatsby-focus-wrapper{
    background-color: #232df1;
    height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }
  main {
    background-color: #232df1;
    height: 100%;
    padding: 5% 0 0 0;
    margin: 0;
    box-sizing: border-box;

  }
`;

const StyledRow = styled.div`
  display: flex;
  margin-top: 2%;
`;

const StyledFirstRow = styled(StyledRow)`
  justify-content: center;
`;

const StyledSecondRow = styled(StyledRow)`
  justify-content: space-around;
`;

const StyledThirdRow = styled(StyledRow)`
  justify-content: center;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <StyledFirstRow>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='240'
            height='120'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='240'
            height='120'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
        </StyledFirstRow>
        <StyledSecondRow>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='240'
            height='120'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='240'
            height='120'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
        </StyledSecondRow>
        <StyledThirdRow>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='240'
            height='120'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='240'
            height='120'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
          ></iframe>
        </StyledThirdRow>
      </main>
    </>
  );
};

export default IndexPage;
