/**
 * Created by dxc on 2016/11/18.
 */
import React, { Component } from 'react';
import Block from 'fs-flex';
import LoadingIcon from './LoadingIcon';
import iNoBounce from 'inobounce';
import NProgress from 'nprogress';
import '../../../assets/nprogress.less';

export default class Loading extends Component {
  //渲染前调用一次，这个时候DOM结构还没有渲染。fv
  noScroll() {
    if (this.oldOverflow != 'hidden') {
      document.body.style.overflow = 'hidden';
    }
    iNoBounce.enable();
  }
  scroll() {
    document.body.style.overflow = this.oldOverflow;

    iNoBounce.disable();
  }
  open() {
    const { mode = 'icon' } = this.props;
    if (mode === 'progress') {
      NProgress.start();
    }
    this.noScroll();
  }
  close() {
    const { mode = 'icon' } = this.props;
    if (mode === 'progress') {
      NProgress.done();
    }
    this.scroll();
  }
  // 渲染前调用一次，这个时候DOM结构还没有渲染
  componentWillMount() {
    this.oldOverflow = document.body.style.overflow;
    const { isShow = true } = this.props;
    if (isShow) {
      this.open();
    }
  }
  // 初始化渲染不会调用，在接收到新的props时，会调用这个方法。
  componentWillReceiveProps(props) {
    const { isShow = true } = props;
    if (isShow) {
      this.open();
    } else {
      this.close();
    }
  }
  componentWillUnmount() {
    this.close();
  }
  render() {
    const { isShow = true, title = '数据加载中', mode = 'icon' } = this.props;
    if (!isShow) {
      return null;
    }
    if (mode === 'progress') {
      return <Block bc="#fff" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1500 }} j="c" a="c" />;
    }
    return (
      <Block style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1500 }} j="c" a="c">
        <Block w={190} h={108} bc="rgba(1,1,1,0.6)" s={{ borderRadius: 5, boxSizing: 'border-box' }} a="c" vf p={15}>
          <Block f="1" w={30} mt={10}>
            <LoadingIcon />
          </Block>
          <Block fs={14} fc="#fff">
            {title}
          </Block>
        </Block>
      </Block>
    );
  }
}
