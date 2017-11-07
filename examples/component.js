/**
 * Created by dxc on 2016/12/2.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Loading } from 'fs-loading';

class Simple extends Component {
  state = {
    show: false,
  };

  onShow() {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 2000);
  }

  render() {
    return (
      <div style={{ height: 300, padding: 20 }}>
        <div onClick={this.onShow.bind(this)}>点击显示</div>
        <Loading isShow={this.state.show} />
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));
