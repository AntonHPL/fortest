import { makeAutoObservable } from "mobx";

const black = "#000";
const white = "#fff";
const gray2 = "#fafafa"
const gray4 = "#f0f0f0";
const gray10 = "#262626";
const gray12 = "#141414";

class Theme {
  lightTheme = {
    colorPrimary: black,
    colorTextBase: black,
    colorBgLayout: white,
    colorBgBase: white,
    colorPrimaryBg: gray4,
    colorBgTextHover: gray2,
  };
  
  darkTheme = {
    colorPrimary: white,
    colorTextBase: white,
    colorBgLayout: black,
    colorBgBase: gray10,
    colorPrimaryBg: black,
    colorBgTextHover: gray12,
  };

  theme = this.lightTheme;
  constructor() {
    makeAutoObservable(this);
  }

  changeMode() {
    this.theme = JSON.stringify(this.theme) === JSON.stringify(this.lightTheme) ? this.darkTheme : this.lightTheme;
  }
}

export default new Theme();
