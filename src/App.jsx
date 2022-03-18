import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Form from "./voteForm";
import { Layout, Typography } from "antd";


const MyHello = () => {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;


  

  return (
    <div>
      <Layout className="layout">
        <Header>
          <h2 style={{ color: "white" }}>Voting on the internet computer</h2>
        </Header>
        <Content style={{ padding: "0 100px", height: "80vh" }}>
          <div style={{ marginTop: "40px" }} className="site-layout-content">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                marginTop: "40px",
              }}
            >
              <div>
                <Form color="red" name={"Candidate A"}  />
              </div>

              <div>
                <Form color="blue" name={"Candidate B"}  />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: "40px",
              }}
            >
              <Title level={3}>Lead:</Title>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Voting dApp Motoko Bootcamp ©2022 Created by Jemba Tony
        </Footer>
      </Layout>
    </div>
  );
};

export default MyHello;