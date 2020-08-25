import React from "react";
import longLogo from "../images/longLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__left">
          <img src={longLogo} className="Footer__logo" />
        </div>
        <div className="Footer__center">
          <ul>
            <li>4LEAF SOFTWARE</li>
            <li>대표 윤 상 호</li>
            <li>4leaf.ysh@gmail.com</li>
            <li>위치 : 대전광역시 서구 계룡로 394번길 14-14</li>
            <li>Copyright ⓒ 2020 All rights reserved. By 4LEAF SOFTWARE</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
