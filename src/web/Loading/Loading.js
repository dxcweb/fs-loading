/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import {Block} from 'fs-flex'
import LoadingIcon from './LoadingIcon'
export  default class Loading extends Component {
    render() {
        const {isShow=true, ratio=1, title='数据加载中'}=this.props;
        if (!isShow) {
            return null;
        }
        return (
            <Block style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1500}} j="c" a="c">
                <Block w={190*ratio} h={108*ratio} bc="rgba(1,1,1,0.6)"
                       s={{borderRadius:5*ratio,boxSizing:"border-box"}} a="c" vf p={15*ratio}>
                    <Block f="1" w={30*ratio} mt={10*ratio}>
                        <LoadingIcon ratio={ratio}/>
                    </Block>
                    <Block fs={14*ratio} fc="#fff">{title}</Block>
                </Block>
            </Block>
        )
    }
}