// @flow
import styled from "styled-components";

interface SectionStyleProps {
  useBackground: boolean;
}

const SectionContentStyled = styled.section<SectionStyleProps>`
  width: 100vw;
  height: 600px;
  background-color: ${(props) => (props.useBackground ? "white" : "#ebebf0")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SectionContentStyled;
