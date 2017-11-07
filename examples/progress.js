import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import loading from 'fs-loading';
class Simple extends Component {
  onShow() {
    loading.show({ mode: 'progress' });
    setTimeout(function() {
      loading.hide();
    }, 3000);
  }
  render() {
    return (
      <div style={{ height: 300, padding: 20 }} onClick={this.onShow.bind()}>
        点击显示
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));
