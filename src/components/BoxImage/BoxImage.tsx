import styled from "styled-components"

interface BoxImageProps {
    urlImage: string;
}

const BoxImage = styled.div<BoxImageProps>`
    width: 40vw;
    height: 350px;
    background-image: url(${(props) => props.urlImage});
    background-repeat: no-repeat;
    background-position: center center;
`;

export default BoxImage;