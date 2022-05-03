import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const StyledLogoContainer = styled.div`
    display:flex;
    justify-content:center;
    ${media.tablet`
        justify-content:space-around;
    `}
    align-items:center;
    flex-wrap:wrap;
`;

export const StyledLogo = styled.div`
    width:120px;
    margin:10px 0;
    img {
        max-height:80px;
        width:auto;
        max-width:100%;
    }
`;