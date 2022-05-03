import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";

import { SpaceH } from "../../space";
import { GridLarge } from "../../utils/grid";

import { ContentBlock, TopText, Button, TabsWrapper } from "./styled";

import CategoryItem from '../CategoryItem'

import MobileIndex from "./mobileindex"

const FeatureSubCategory = ({ data, selectedIndex, setSelectedIndex }) => {
  
  const [viewFeatures, setViewFeatures ] = useState(false)
  useEffect(() => {
    console.log('view',  viewFeatures)
  },[viewFeatures])
  var loopCount = 0;
  return (
    <>
      <SpaceH of={30} />
      <ContentBlock>
        <GridLarge>

          <TopText>
            <button onClick={(e)=>setViewFeatures(!viewFeatures)} className={!viewFeatures && 'active'}>Explore features</button>
            <button onClick={(e)=>setViewFeatures(!viewFeatures)} className={viewFeatures && 'active'}>View All</button>
          </TopText>
          <MobileIndex data={data} viewFeatures={viewFeatures} />
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
                                    className={subindex + 1 === cat.items.length ? 'react-tabs__tab last_tab' : 'react-tabs__tab'}
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
                  {!viewFeatures && data && data.map((cat, index) => {
                    return (cat.items && cat.items.map((sub, subindex) => {
                      const subCats = sub.features_sub_category.document.data.body[0].items ? sub.features_sub_category.document.data.body[0].items : []
                      return (
                        <TabPanel key={subindex}>
                          <h4>{cat.primary.category_title}</h4>
                          <h2>{sub.features_sub_category.document.data.category_title.text}</h2>
                          <Row>
                            {subCats && subCats.map((scat, sindex) => <CategoryItem key={sindex} data={scat} />)}
                          </Row>
                        </TabPanel>
                      )
                    })
                    )
                  })}
                  {viewFeatures && data && data.map((cat, index) => {
                      return(
                        <div key={index}> 
                            <h4>{cat.primary.category_title}</h4>
                           {
                              cat.items && cat.items.map((sub, subindex) => {
                                const subCats = sub.features_sub_category.document.data.body[0].items ? sub.features_sub_category.document.data.body[0].items : []
                                return (
                                  <div key={subindex}>                          
                                    <h2>{sub.features_sub_category.document.data.category_title.text}</h2>
                                    <Row>
                                      {subCats && subCats.map((scat, sindex) => <CategoryItem key={sindex} data={scat} />)}
                                    </Row>
                                  </div>
                                )
                              })
                           }
                        </div>
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
