import React, { useState } from "react";
import { Layout, Radio, Space, Row, Col, Modal, Card, Rate, Button, Input, Form, Select, InputNumber } from "antd";
import {ClockCircleOutlined} from '@ant-design/icons';
import { defaultItems } from "../Assets/libs/data";
import { useQuery,useMutation } from "@apollo/client";
import {DISPLAY_DATA} from "../Assets/libs/displayData";
import { NEW_SERVICE } from "../Assets/libs/displayData";




const { Header, Content, Footer } = Layout;
// const options = defaultItems;

const SkinHealth = () => {
  
  const [NewService] = useMutation(NEW_SERVICE);

  const { loading, error, data:displayData } = useQuery(DISPLAY_DATA);
  let options = []

  if(!loading){
    options = displayData.master_categories;
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [optionValue, setOptionValue] = useState("");
  
  const [firstChildCategory, setFirstChildCategory] = useState([]);

  const [optionSubCategoryValue, setOptionSubCategoryValue] = useState("");

  const [firstChildSubCategory, setFirstChildSubCategory] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (form) =>{
   console.log(form);

  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    console.log(form.getFieldsValue());
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const addService = (values)=>{
      NewService({
        variables: {
          category_id: values.Category,
          duration: values.Duration,
          in_clinic: true,
          name: values.ServiceName,
          rating: values.Rating,
          price: values.Price
        },
        // update: (cache) => {
        //   const data = cache.readQuery({
        //     query: DISPLAY_DATA,
        //     variables: {
        //       category_id: values.Category,
        //     },
        //   });
        //   console.log(data)
        //   if (data) {
        //     cache.writeQuery({
        //       query: DISPLAY_DATA,
        //       variables: {
        //         category_id: values.Category,
        //       },
        //       data: {
        //         services: [...displayData.master_categories, NewService],
        //       },
        //     });
        //   }
        // },
      });
    };

  const radioChangeHandler = (e, from="tabs") => {
    console.log(e);
   

     const selectedValue = from ==='tabs'?
     e.target.value : e;
    
    setOptionValue(selectedValue);
    
    const selected = options.find((data) => data.id === selectedValue);
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
          <Button type="primary" onClick={showModal}>
        Add Service
      </Button>
      <Modal title="Add Service" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
         <Form
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 14 }}
         layout="horizontal"
         name="control-hooks"
         onFinish={addService}
         form = {form}
         >
           <Form.Item name="MasterCategory" label="Master Category">
          <Select
            placeholder="Choose Master Category"
            onChange={(e) => radioChangeHandler(e, 'form') }

            
          >
             {options.map((categories) => (
              <Select.Option value={categories.id}>{categories.name}</Select.Option>
            ))} 
          </Select>
          </Form.Item>

          <Form.Item name="Category" label="Category">
          <Select placeholder="Choose category">
               {firstChildCategory?.map((categories) => (
              <Select.Option value={categories.id}>{categories.name}</Select.Option>
            ))}   
          </Select>
        </Form.Item>

        <Form.Item name="ServiceName" label="Service name">
          <Input placeholder="Enter Service name" />
        </Form.Item>
        <Form.Item name="Duration" label="Duration">
        <Input           
            placeholder="Duration"
            // style={{ width: "60px" }}
          />
          {/* <TimePicker
            value={displayData?.duration}
            format="HH:mm"
            style={{ width: "120px" }}
          /> */}
          </Form.Item>

          <Form.Item name="Rating" label="Rating">
          <InputNumber
            min="0"
            max="5"
            placeholder="Rate"
            style={{ width: "60px" }}
          />
        </Form.Item>

        <Form.Item name="Price" label="Price">
          <Input placeholder="Price" style={{ width: "60px" }} />
        </Form.Item>
        <Form.Item>

        <Button type="primary" htmlType="submit">
            Create New Service
          </Button>

        </Form.Item>
         </Form>
 
      </Modal>
        </Header>

        <div style={{ width: "auto", margin: "0 auto", marginTop: "50px" }}>
          <Content>
            <div className="site-layout-content">
              <Radio.Group
                onChange={(e) => radioChangeHandler(e, 'tabs') }
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
