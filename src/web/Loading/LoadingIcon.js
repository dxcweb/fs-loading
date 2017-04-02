/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import Block from 'fs-flex'
import  '../../../assets/LoadingIcon.less'
export default class LoadingIcon extends Component {
    render() {
        const circle = {
            w: 7,
            h: 7
        };
        return <Block className="spinner" w={30} h={30}>
            <Block className="spinner_container container1">
                <Block className="circle1" {...circle} />
                <Block className="circle2" {...circle} />
                <Block className="circle3" {...circle} />
                <Block className="circle4" {...circle} />
            </Block>
            <Block className="spinner_container container2">
                <Block className="circle1" {...circle} />
                <Block className="circle2" {...circle} />
                <Block className="circle3" {...circle} />
                <Block className="circle4" {...circle} />
            </Block>
        </Block>
    }
}