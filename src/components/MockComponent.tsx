import { FC } from "react";
import { Typography } from "antd/es";

// the component to mock other menu items
const MockComponent: FC<{ text: string }> = ({ text }) => {
  const { Title } = Typography;
  return <Title>{text}</Title>;
};

export default MockComponent;
