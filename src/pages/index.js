import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import poemTextImage from '../images/felkeleken_vers.png';
import titleImage from '../images/felkeleken_logo.png';

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
    padding: 3% 0 0 0;
    margin: 0 auto;
    box-sizing: border-box;

  }
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  margin-top: 1%;
`;

const StyledTextRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-bottom: 2.5%;
`;

const StyledFirstVideo = styled(AbsoluteWrapper)`
  top: 45%;
  left: 57.5%;
`;

const StyledSecondVideo = styled(AbsoluteWrapper)`
  top: 62%;
  left: 60%;
`;

const StyledThirdVideo = styled(AbsoluteWrapper)`
  top: 75%;
  left: calc(50% - 108px);
`;

const StyledFourthVideo = styled(AbsoluteWrapper)`
  top: 45%;
  left: 25%;
`;

const StyledFifthVideo = styled(AbsoluteWrapper)`
  top: 15%;
  left: calc(50% - 160px);
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <StyledTextRow>
          <img
            src={titleImage}
            style={{
              width: '300px',
              height: 'auto',
            }}
          />
        </StyledTextRow>

        <StyledFifthVideo>
          <iframe
            src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
            width='320'
            height='180'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
            id={5}
          ></iframe>
        </StyledFifthVideo>
        <StyledFourthVideo>
          <iframe
            src='https://player.vimeo.com/video/705511422?h=0efc6fbe38'
            width='256'
            height='144'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
            id={4}
          ></iframe>
        </StyledFourthVideo>
        <StyledThirdVideo>
          <iframe
            src='https://player.vimeo.com/video/705510337?h=9244c39330'
            width='192'
            height='108'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
            id={3}
          ></iframe>
        </StyledThirdVideo>
        <StyledSecondVideo>
          <iframe
            src='https://player.vimeo.com/video/705509912?h=1f1327444e'
            width='128'
            height='72'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
            id={2}
          ></iframe>
        </StyledSecondVideo>
        <StyledFirstVideo>
          <iframe
            src='https://player.vimeo.com/video/705509449?h=20bc40e5fb'
            width='96'
            height='54'
            frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowfullscreen
            id={1}
          ></iframe>
        </StyledFirstVideo>
        {/* <img
          src={poemTextImage}
          style={{
            width: '300px',
            height: 'auto',
            position: 'absolute',
            left: '24px',
            top: '225px',
          }}
        />
        <img
          src={poemTextImage}
          style={{
            width: '300px',
            height: 'auto',
            position: 'absolute',
            right: '24px',
            top: '225px',
          }}
        /> */}
      </main>
    </>
  );
};

export default IndexPage;

// import * as React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import poemTextImage from '../images/felkeleken_vers.png';
// import titleImage from '../images/felkeleken_logo.png';

// const GlobalStyles = createGlobalStyle`
//   #___gatsby{
//     background-color: #232df1;
//     height: 100vh;
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//   }
//   #gatsby-focus-wrapper{
//     background-color: #232df1;
//     height: 100vh;
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;

//   }
//   body {
//     height: 100vh;
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;

//   }
//   main {
//     background-color: #232df1;
//     height: 100%;
//     padding: 3% 0 0 0;
//     margin: 0 auto;
//     box-sizing: border-box;

//   }
// `;

// const StyledRow = styled.div`
//   display: flex;
//   margin-top: 1%;
// `;

// const StyledTextRow = styled(StyledRow)`
//   justify-content: center;
//   margin-top: 0;
//   padding-bottom: 2.5%;
// `;

// const StyledFirstRow = styled(StyledRow)`
//   justify-content: center;
// `;

// const StyledSecondRow = styled(StyledRow)`
//   padding: 20px 200px;
//   justify-content: space-around;
// `;

// const StyledThirdRow = styled(StyledRow)`
//   justify-content: center;
// `;

// const IndexPage = () => {
//   return (
//     <>
//       <GlobalStyles />
//       <main>
//         <StyledTextRow>
//           <img
//             src={titleImage}
//             style={{
//               width: '300px',
//               height: 'auto',
//             }}
//           />
//         </StyledTextRow>

//         <StyledFirstRow>
//           <iframe
//             src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
//             width='240'
//             height='120'
//             frameborder='0'
//             allow='autoplay; fullscreen; picture-in-picture'
//             allowfullscreen
//           ></iframe>
//           <iframe
//             src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
//             width='240'
//             height='120'
//             frameborder='0'
//             allow='autoplay; fullscreen; picture-in-picture'
//             allowfullscreen
//           ></iframe>
//         </StyledFirstRow>
//         <StyledSecondRow>
//           <iframe
//             src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
//             width='240'
//             height='120'
//             frameborder='0'
//             allow='autoplay; fullscreen; picture-in-picture'
//             allowfullscreen
//           ></iframe>
//           <iframe
//             src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
//             width='240'
//             height='120'
//             frameborder='0'
//             allow='autoplay; fullscreen; picture-in-picture'
//             allowfullscreen
//           ></iframe>
//         </StyledSecondRow>
//         <StyledThirdRow>
//           <iframe
//             src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
//             width='240'
//             height='120'
//             frameborder='0'
//             allow='autoplay; fullscreen; picture-in-picture'
//             allowfullscreen
//           ></iframe>
//           <iframe
//             src='https://player.vimeo.com/video/703459983?h=cee729d877&color=ffffff&byline=0&portrait=0'
//             width='240'
//             height='120'
//             frameborder='0'
//             allow='autoplay; fullscreen; picture-in-picture'
//             allowfullscreen
//           ></iframe>
//         </StyledThirdRow>
//         <img
//           src={poemTextImage}
//           style={{
//             width: '300px',
//             height: 'auto',
//             position: 'absolute',
//             left: '24px',
//             top: '225px',
//           }}
//         />
//         <img
//           src={poemTextImage}
//           style={{
//             width: '300px',
//             height: 'auto',
//             position: 'absolute',
//             right: '24px',
//             top: '225px',
//           }}
//         />
//       </main>
//     </>
//   );
// };

// export default IndexPage;
