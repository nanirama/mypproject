import styled from "styled-components";

export const ItemBox = styled.div`
margin-bottom:40px !important; 
@media screen and (min-width:1200px) {
    padding-right: 8%;
}
p{font-weight: 300;font-size: 16px; line-height: 24px;color: #405463;
    
a{color:#00CC88; font-weight:700;}
}
a{color:#00CC88;font-weight:700;}
`
export const TitleBox = styled.div`
display:flex;
align-items:center;
margin-bottom:12px;
h5{font-weight: 700;font-size: 20px; line-height: 26px;color: #262F3D; margin-left:15px;
    @media screen and (max-width: 991px) {
        font-size: 18px;
    }
}
.gatsby-image-wrapper, .icon{width:35px !important;height:35px !important;}

`