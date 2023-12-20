import { Button, Segmented, Badge, Divider } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { StyledFlexContainer } from "../styles/styled";
import { FC } from "react";
import theme from "../store/theme";

const Panel: FC = () => {
  return (
    <div className="panel-container">
      <StyledFlexContainer $jc="flex-end" $ai="center" $height={100}>
        <Segmented
          defaultValue={"Company management"}
          options={["Robert Machac", "Group management", "Company management"]}
        />
        <Button
          type="text"
          shape="circle"
          className="panel-container__bell-button"
        >
          <Badge dot offset={[-5, 2]}>
            <BellOutlined className="panel-container__bell-outlined" />
          </Badge>
        </Button>
        <Button
          shape="circle"
          className={`panel-container__theme-button panel-container__theme-button${
            JSON.stringify(theme.theme) === JSON.stringify(theme.darkTheme)
              ? "--light"
              : "--dark"
          }`}
          onClick={() => {
            theme.changeMode();
          }}
        />
      </StyledFlexContainer>
      <Divider className="panel-container__divider" />
    </div>
  );
};

export default Panel;
