import styled from "styled-components";

const HeadlineStyled = styled.div`
  height: 400px;
  width: 100vw;
  background-color: #9c27b0;
  font-size: 80px;
  color: white;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon-pulsate {
    animation: pulsate-bck 0.5s ease-in-out infinite both;

    @keyframes pulsate-bck {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
  @media screen and (max-width: 767px) {
    .newsletter {
      & > :not(style) {
        width: 5ch;
      }
    }
    .title-newsletter {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export default HeadlineStyled;
