import styled from "styled-components";

export const BusinessBlock = styled.div`
background: #262F3D;
padding:60px 0;
text-align:center;

@media screen and (max-width: 991px) {
    .container { width: 100%;}  
}
@media screen and (max-width: 767px) {
    padding:40px 0;
    float:left;
}

h2{font-weight: 700;font-size: 34px;line-height: 48px; text-align: center;color: #FFFFFF;
    @media screen and (max-width: 991px) {
        font-size: 28px;line-height: 32px;margin-bottom:25px;
    }
    @media screen and (max-width: 767px) {
    font-size: 24px;
}
}


`
export const Button = styled.div`
background: #00CC88;
border-radius: 6px;
font-weight: 700;
font-size: 18px;
line-height: 28px;
letter-spacing: 1px;
text-transform: uppercase;
color: #FFFFFF;
padding:10px 20px;
text-align:center;
width:auto;
display:inline-block;
`   