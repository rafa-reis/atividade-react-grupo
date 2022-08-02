import styled from "styled-components";

const HeaderStyled = styled.header`
  @media screen and (max-width: 767px) {
    .icon-mobile {
      display: flex;
      align-self: flex-start;
      margin: 0;
      padding: 0;
    }

    .title-mobile {
      display: none;
    }

    .contact-mobile {
      display: none;
    }

    .hamburguer {
      display: flex;
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 766px) {
    .hamburguer {
      display: none;
    }
  }
`;
export default HeaderStyled;
