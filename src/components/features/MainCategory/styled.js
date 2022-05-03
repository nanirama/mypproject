import styled from "styled-components";

export const FeatureBlock = styled.div`
@media screen and (min-width: 73.125em) {
    padding-top:50px;
}
@media screen and (max-width: 991px) {
    .container { width: 100%;}
}

`
export const TopContent = styled.div`
max-width:800px;
margin:0 auto;
padding:0 10px;
border:1px solid #ffffff;
`
export const Heading = styled.h2`
font-size: 30px;line-height: 36px;font-weight: 700;text-align: center;color: #262F3D;margin-bottom:15px;
`
export const Paragraph = styled.p`
font-size: 20px;line-height: 26px;text-align: center;color: #425168;margin-bottom:30px;
`
export const FeatureItem = styled.div`
margin:30px 0;
text-align:center;

img{width:100%;}
h4{font-size: 24px;line-height: 32px;color: #262F3D;margin:15px 0;font-weight:700;}
p{font-size: 18px;line-height: 24px;font-weight: 300;}

`