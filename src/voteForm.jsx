import * as React from "react";
import { Avatar, Button, Space, Card, Typography } from "antd";

const Form = ({ color, name ,votes}) => {
  const { Title } = Typography;
  return (
    <div>
      <Card title={name} bordered={false} style={{ width: "25vw" }}>
        <Space
          style={{ display: "flex", flexDirection: "column" }}
          size="large"
        >
          <div>
            <Avatar size={40} style={{ backgroundColor: color }}>
              CANDIDATE
            </Avatar>
          </div>
          <div>
            <Button type="primary">Vote</Button>
          </div>
        </Space>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "40px",
          }}
        >
          <Title level={5}>Total Votes:{votes}</Title>
        </div>
      </Card>
    </div>
  );
};

export default Form;
