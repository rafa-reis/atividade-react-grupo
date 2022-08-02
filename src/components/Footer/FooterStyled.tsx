import styled from "styled-components";

interface FooterStyleProps {
  useBackground: boolean;
}

const FooterStyled = styled.footer<FooterStyleProps>`
  width: 100vw;
  height: 30vh;
  background-color: ${(props) => (props.useBackground ? "white" : "#ebebf0")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
  }

  small {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #3f93f3;
  }

  .social-midias {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    nav {
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    small {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

export default FooterStyled;
