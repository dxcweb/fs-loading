/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import addComponent from 'fs-addcomponent'
import Loading from './Loading/Loading'
let key = null;
export default {
    show: (props = {})=> {
        if (key == null)
            key = addComponent.add(<Loading {...props}/>)
    },
    hide: ()=> {
        if (key != null) {
            addComponent.remove(key);
            key = null;
        }
    }
}