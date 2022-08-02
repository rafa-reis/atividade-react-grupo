import styled from "styled-components";
import img1 from "../../assets/expression.jpg";

const NavigationStyle = styled.div`
  width: 100vw;
  height: 1000px;
  background-image: url(${img1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  h1 {
    color: white;
    position: absolute;
    top: 500px;
    right: 50px;
    font-size: 90px;
    background-clip: text;
    -webkit-background-clip: text;
    color: white;
    background-image: linear-gradient(90deg, rgb(127 38 199), rgb(251 2 131));
    animation: animated-gradient-title-2 3.5s infinite forwards;
    font-family: "Roboto";
  }

  @media screen and (max-width: 1024px) {
    h1 {
      top: 500px;
      right: 20px;
      font-size: 60px;
    }

    @media screen and (max-width: 767px) {
      h1 {
        top: 500px;
        right: 20px;
        font-size: 50px;
        text-align: end;
      }
    }
  }

  @keyframes animated-gradient-title-2 {
    0%,
    16.667%,
    66.667%,
    100% {
      color: white;
    }

    33.333%,
    50% {
      color: rgb(0 0 0 / 0%);
    }
  }
`;

export default NavigationStyle;
