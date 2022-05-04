import styled from "styled-components";

import Arrow1 from "../../../assets/images/features/arrow1.png";
import Arrow2 from "../../../assets/images/features/arrow2.png";


export const ContentBlock = styled.div`
padding-bottom:100px;
@media screen and (max-width: 991px) {
.container { width: 100%;}
padding-bottom: 30px;
}
`
export const CategoryListItems = styled.div`
`
export const TabsWrapper = styled.div`
h4{font-size: 20px;line-height: 24px;color: #637491;font-weight:400; margin-bottom:20px;}
.tablist{
    h4{color: #262F3D;font-weight:700}
}

h2{font-size: 36px;line-height: 42px;color: #262F3D;margin-bottom:40px;font-weight: 300;}

.react-tabs__tab{width:100%;border:none;font-weight: 400;font-size: 18px;line-height: 24px;color: #262F3D; margin-bottom:15px; padding:0;}
.react-tabs__tab:focus{box-shadow:none;}
.react-tabs__tab--selected{color: #00CC88;font-weight: 700;}
.react-tabs__tab.last_tab{margin-bottom:40px;}
@media screen and (max-width: 767px) {
display:none !important;

}
`
export const TopText = styled.div`
display:flex;
margin-bottom:40px;
align-items:center;
flex-direction: row;
@media screen and (min-width: 768px) {
    justify-content: flex-start;
}
@media screen and (max-width: 767px) {
    justify-content: space-between;
}
& > button{
    border:none;
    cursor:pointer;
    background: rgba(255, 255, 255);border-radius: 75px;font-size: 14px;line-height: 18px;font-weight: 700;color: #ADB8D4;padding:10px 18px;
}
& > button.active{
    background: rgba(189, 207, 240, 0.15);color: #637491;
}
`
export const SubTitle = styled.h5`
font-weight: 700;font-size: 15px;line-height: 24px;color: #ADB8D4;margin-right:20px;
`
export const Button = styled.div`
background: rgba(189, 207, 240, 0.15);border-radius: 75px;font-size: 13px;line-height: 18px;color: #637491;padding:10px 18px;
`
export const ItemBox = styled.div`
margin-bottom:40px !important;
p{font-weight: 300;font-size: 18px; line-height: 26px;color: #405463;
    @media screen and (max-width: 991px) {
        font-size: 16px;
    }
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

export const CategoryBlockM = styled.div`
width:100%;
float:left;
@media screen and (min-width: 768px) {
    display:none;
}
.item{margin:0;}

h2 {
    font-size: 36px;
    line-height: 42px;
    color: #262F3D;
    margin-bottom: 40px;
    font-weight: 300;
}
h6{font-size: 18px;line-height: 26px; color: #637491;font-weight: 400; margin-bottom:20px; margin-left:2px;}
`
export const CategoryBlock = styled.div`
width:100%;
float:left;margin-bottom:35px;
@media screen and (min-width: 768px) {
    display:none;
}
.item{margin:0;}

h2 {
    font-size: 36px;
    line-height: 42px;
    color: #262F3D;
    margin-bottom: 40px;
    font-weight: 300;
}
h6{font-size: 30px;line-height: 26px; color: #637491;font-weight:700; margin-bottom:20px; margin-left:14px;}

.Collapsible{margin-bottom:15px;position:relative;
span:after {content: "";position: absolute;right: 10px;top: 10px;width:40px;height:40px;
  background: rgba(189, 207, 240, 0.15);border-radius: 50%;cursor:pointer; background-image:url(${Arrow1}); background-position:center;background-repeat:no-repeat; background-size:45%;}
span.is-open:after {background-image:url(${Arrow2});}
}
.Collapsible__trigger{background: #FAFAFA;border-radius: 5px;font-weight: 700;font-size: 24px;
line-height: 42px; color: #262F3D;padding:10px 15px;width:100%;display: inline-block;}
.Collapsible__contentInner{margin:30px 0;padding:0 15px;font-weight:300;font-size:18px;line-height:24px;color: #405463;}
.accordion {
    list-style: none;
  }
  
  .accordion_item {
    border-top:0px solid #9f9f9f;
  }
  
  .button {
    font-size:20px;
    background-color: #fafafa;
    color: #262F3D;
    text-align: left;
    font-weight:900;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px;
    margin-bottom:9px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  
  .control {
    width:38px !important;
    height:38px !important;
    background: rgba(189, 207, 240, 0.15);
    border-radius: 50%;
    cursor:pointer;
    background-position:center center;
    background-repeat:no-repeat;
    background-size:40%;
    background-image:url(${Arrow2});
    transition: transform .7s ease-in-out;
  }
  .control.active{
    padding-left:8px;
    transform: rotate(180deg);
  }
  
  .answer {
    background-color: #fff;
    padding: 20px 12px;
  }
  
  .accordion_item.active .button {
    background-color: #fafafa;
  }
  .answer_wrapper {
    height: 0;
    overflow: hidden;
    transition: height ease 0.2s;
  }
`