import React, { useState } from "react";
import { Layout, Radio, Space, Row, Col, Divider, Card, Rate } from "antd";
import {ClockCircleOutlined} from '@ant-design/icons';
import { defaultItems } from "../Assets/libs/data";
import { useQuery } from "@apollo/client";
import {DISPLAY_DATA} from "../Assets/libs/displayData";




const { Header, Content, Footer } = Layout;
// const options = defaultItems;

const SkinHealth = () => {
  const { loading, error, data } = useQuery(DISPLAY_DATA);
  let options = []

  if(!loading){
    options = data.master_categories;
  }

  const [optionValue, setOptionValue] = useState("");
  const [optionCategoryValue, setOptionCategoryValue] = useState("");
  const [firstChildCategory, setFirstChildCategory] = useState([]);

  const [optionSubCategoryValue, setOptionSubCategoryValue] = useState("");

  const [firstChildSubCategory, setFirstChildSubCategory] = useState([]);

  const radioChangeHandler = (e) => {
    console.log("radio3 checked", e.target);

    setOptionValue(e.target.value);
    
    const selected = options.find((data) => data.id === e.target.value);
    console.log(
      selected
    )

    setFirstChildCategory(selected.categories);

     setFirstChildSubCategory([]);
     setOptionSubCategoryValue("");
  };

  const radioChangeCategoryHandler = (e) => {
    setOptionSubCategoryValue(e.target.value);

     const selected = firstChildCategory.find(
       (data) => data.id === e.target.value
      
     );

     console.log(selected);

     setFirstChildSubCategory(selected.services);
    
  };

  return (
    <>
      <Layout className="layout">
        <Header>
          <div  className="logo" />
        </Header>

        <div style={{ width: "auto", margin: "0 auto", marginTop: "50px" }}>
          <Content>
            <div className="site-layout-content">
              <Radio.Group
                onChange={radioChangeHandler}
                optionType="button"
                value={optionValue}
              >
                {options.map((data) => {
                  return (
                    <Space size={[8, 16]} wrap>
                      <Radio.Button
                        style={{ width: "130px", margin: "0px 10px" }}
                        value={data.id}
                        key={data.id}
                      >
                        <img style = {{width:"40px", height:"40px", margin: "0 auto"}} src={data.image} alt="Logo" />
                        <br />

                        <span>{data.name}</span>
                      </Radio.Button>
                    </Space>
                  );
                })}
              </Radio.Group>
            </div>
          </Content>
          <br />

          <Row gutter={24}>
            <Col className="gutter-row" span={10}>
              {firstChildCategory.length ? (
                <div>
                  <Content>
                    <div className="site-layout-content">
                      <Radio.Group
                        style={{ width: "100%" }}
                        onChange={radioChangeCategoryHandler}
                        optionType="button"
                        value={optionSubCategoryValue}
                      >
                        <Space style={{ width: "100%" }} direction="vertical">
                          {firstChildCategory.map((data) => {
                            return (
                              <Radio.Button
                                style={{ width: "100%" }}
                                value={data.id}
                                key={data.id}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span>{data.name}</span>

                                  <span>{data.services.length}</span>
                                </div>
                              </Radio.Button>
                            );
                          })}
                        </Space>
                      </Radio.Group>
                    </div>
                  </Content>
                </div>
              ) : (
                ""
              )}
            </Col>
            <Col className="gutter-row" span={14}>
              <div>
                {firstChildSubCategory.length ? (
                  <Content>
                    <div className="site-layout-content">
                      <div className="site-card-wrapper">
                        <Row gutter={[24, 24]}>
                          <div style={{ width: "100%" }}>
                            {firstChildSubCategory.map((data) => (
                              <Col
                                key={data.key}
                                span={24}
                                style={{ margin: "10px 0px" }}
                              >
                                <Card bordered={true}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {data.name}
                                    </span>

                                    <span
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        color: "#4fcb49",
                                      }}
                                    >
                                     {"£"} {data.price}
                                    </span>
                                  </div>

                                  <div>
                                    <span>
                                      {data.duration}
                                      {" min"} <ClockCircleOutlined />
                                    </span>
                                  </div>

                                  <div>
                                    <Rate disabled defaultValue={data.rating} />{" "}
                                    <span>
                                      {data.review} {" reviews"}
                                    </span>
                                  </div>
                                </Card>
                              </Col>
                            ))}
                          </div>
                        </Row>
                      </div>
                    </div>
                  </Content>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>

          <Footer style={{ textAlign: "center" }}>Powered by Pabau</Footer>
        </div>
      </Layout>
    </>
  );
};

export default SkinHealth;
