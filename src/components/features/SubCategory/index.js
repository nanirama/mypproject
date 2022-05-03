import React, { useState } from "react";
import { Link } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";

import { SpaceH } from "../../space";
import { GridLarge } from "../../utils/grid";

import {ContentBlock,TopText, SubTitle, Button, TabsWrapper, TitleBox, ItemBox } from "./styled";

import PromotionIcon1 from "../../../assets/images/features/promotion-icon1.png";

import MobileIndex from "./mobileindex"

const FeatureSubCategory = ({ data, selectedIndex, setSelectedIndex }) => { 
  console.log('sub categorydata', selectedIndex)
  var loopCount = 0;
  return (
    <>
     <SpaceH of={30} />
     <ContentBlock>
     <GridLarge>
     
         <TopText>
     <SubTitle>Explore features</SubTitle>
     <Link to="#"><Button>View All</Button></Link>
     </TopText>
     <MobileIndex data={data}/>
     <TabsWrapper>
          <Tabs
          selectedIndex={selectedIndex}
          onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
          >
            <Row>
              <Col lg={3} md={4} xs={12}>
                  <TabList className="tablist">
                    {
                    data && data.map((cat, index) => {
                     return (
                        <>
                          <h4>{cat.primary.category_title}</h4>
                          { 
                          cat.items && cat.items.map((sub, subindex) => {
                            return (
                              <Tab
                              tabIndex={sub.features_sub_category.document.id}
                              className={subindex+1 === cat.items.length ? 'react-tabs__tab last_tab' : 'react-tabs__tab'}
                              key={sub.features_sub_category.document.id}
                              >{sub.features_sub_category.document.data.category_title.text}</Tab>
                            )
                          }
                          )     
                                            
                          }
                        </>
                      )
                    })}
                  </TabList>
              </Col>
              <Col lg={9} md={8} xs={12}>
              {data && data.map((cat, index) => {
                    return (cat.items && cat.items.map((sub, subindex) => {
                      const subCats = sub.features_sub_category.document.data.body[0].items ? sub.features_sub_category.document.data.body[0].items : []
                      return (
                        <TabPanel key={subindex}>
                          <h4>{cat.primary.category_title}</h4>
                          <h2>{sub.features_sub_category.document.data.category_title.text}</h2>
                          <Row>
                            {subCats && subCats.map((scat,sindex)=>{
                              return(
                                <Col lg={6} md={12} xs={12}>
                                  <ItemBox>
                                    <TitleBox>
                                      {scat.feature_icon && <Image fixed={scat.feature_icon.fixed} />}                                      
                                      <h5>{scat.feature_title}</h5>
                                    </TitleBox>
                                    {scat.feature_description && <div dangerouslySetInnerHTML={{ __html: scat.feature_description.html }} ></div>}                                      
                                  </ItemBox>
                                </Col>
                              )
                            })}
                          </Row>
                        </TabPanel>
                      )
                    })
                    )
                  })}

              </Col>
            </Row>
          </Tabs>
        </TabsWrapper>
        </GridLarge>
    </ContentBlock>
  
    </>
  );
};
export default FeatureSubCategory;
