import React, { useState } from "react";
import { Layout, Radio, Space, Row, Col, Divider, Card, Rate } from "antd";
import {ClockCircleOutlined} from '@ant-design/icons';
import { defaultItems } from "../Assets/libs/data";




const { Header, Content, Footer } = Layout;
const options = defaultItems;

const SkinHealth = () => {
  const [optionValue, setOptionValue] = useState("");
  const [optionCategoryValue, setOptionCategoryValue] = useState("");
  const [firstChildCategory, setFirstChildCategory] = useState([]);

  const [optionSubCategoryValue, setOptionSubCategoryValue] = useState("");

  const [firstChildSubCategory, setFirstChildSubCategory] = useState([]);

  const radioChangeHandler = (e) => {
    console.log("radio3 checked", e.target.value);

    setOptionValue(e.target.value);

    const selected = options.find((data) => data.key === e.target.value);

    setFirstChildCategory(selected.category);

    setFirstChildSubCategory([]);
    setOptionSubCategoryValue("");
  };

  const radioChangeCategoryHandler = (e) => {
    setOptionSubCategoryValue(e.target.value);

    const selected = firstChildCategory.find(
      (data) => data.key === e.target.value
    );

    console.log(selected);

    setFirstChildSubCategory(selected.subCategory);
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
                        value={data.key}
                        key={data.key}
                      >
                        <img src={data.icon} alt="Logo" />
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
                                value={data.key}
                                key={data.key}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span>{data.name}</span>

                                  <span>{data.subCategory.length}</span>
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
                                      {data.time}
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
