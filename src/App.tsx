import "./styles/App.css";
import Orders from "./components/Orders";
import Menu from "./components/Menu";
import Panel from "./components/Panel";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MockComponent from "./components/MockComponent";
import { StyledContainer, StyledFlexContainer } from "./styles/styled";
import { ConfigProvider, Layout } from "antd";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import theme from "./store/theme";

const App: FC = () => (
  <ConfigProvider
    theme={{
      token: theme.theme,
    }}
  >
    <Layout>
      <Router>
        <StyledFlexContainer>
          <StyledContainer $width={20} $dw={10}>
            <Menu />
          </StyledContainer>
          <StyledContainer $width={80} $dw={90}>
            <Panel />
            <Routes>
              <Route path="/orders" element={<Orders />} />
              <Route
                path="/companies"
                element={<MockComponent text={"Companies"} />}
              />
              <Route
                path="/groups"
                element={<MockComponent text={"Groups"} />}
              />
              <Route path="/users" element={<MockComponent text={"Users"} />} />
              <Route
                path="/credits"
                element={<MockComponent text={"Credits"} />}
              />
              <Route
                path="/documents"
                element={<MockComponent text={"Documents"} />}
              />
              <Route path="*" element={<Navigate to="/orders" />} />
            </Routes>
          </StyledContainer>
        </StyledFlexContainer>
      </Router>
    </Layout>
  </ConfigProvider>
);
export default observer(App);
