import React, { PureComponent } from 'react';
import logo from 'C:/Users/hetvi/OneDrive/Desktop/project/yumtiffin/src/images/logo1.png';
import './logo.css';
export default class Logo extends PureComponent {
  render() {
    return (
      <div className='logo'>
            <img src={logo} id="logo"></img>
      </div>
    )
  }
}
