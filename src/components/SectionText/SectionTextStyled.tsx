import styled from "styled-components";

interface SectionStyleProps {
  useBackground: boolean;
}

const SectionTextStyled = styled.section<SectionStyleProps>`
  width: 100vw;
  height: 800px;
  background-color: ${(props) => (props.useBackground ? "white" : "#ebebf0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default SectionTextStyled;
