import { Menu as AsideMenu } from "antd";
import { useNavigate } from "react-router-dom";
import menuland from "../menuland.png";
import {
  CopyOutlined,
  DollarOutlined,
  ShoppingOutlined,
  TableOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FC, ReactElement } from "react";
import { IconType } from "antd/es/notification/interface";
import { StyledFlexContainer, StyledLogo } from "../styles/styled";
import theme from "../store/theme";

const Menu: FC = () => {
  const navigate = useNavigate();

  // the function to return the pattern of an aside menu item
  function getItem(label: string, key: string, icon: ReactElement<IconType>) {
    return {
      key,
      icon,
      label,
    };
  }

  // the items to be displayed in the aside menu
  const items = [
    getItem("Orders", "orders", <ShoppingOutlined />),
    getItem("Companies", "companies", <TableOutlined />),
    getItem("Groups", "groups", <TeamOutlined />),
    getItem("Users", "users", <UserOutlined />),
    getItem("Credits", "credits", <DollarOutlined />),
    getItem("Documents", "documents", <CopyOutlined />),
  ];

  // the active aside menu item getting the data from URL params when reloading the page
  const selectedKey: string = window.location.pathname.slice(1);

  return (
    <StyledFlexContainer $jc="center" $ai="flex-start" $fw>
      {/* menuland logo */}
      <StyledLogo
        $light={theme.lightTheme ? true : false}
        src={menuland}
        alt="menuland"
        onClick={() => (window.location.href = "/")}
      />
      <br />
      <AsideMenu
        onClick={(e) => navigate(`/${e.key}`)}
        className="aside-menu"
        defaultSelectedKeys={["orders"]}
        selectedKeys={[selectedKey]}
        mode="inline"
        items={items}
      />
    </StyledFlexContainer>
  );
};

export default Menu;
