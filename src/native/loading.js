/**
 * Created by guowei on 16/12/20.
 */
import React, { Component } from 'react';
import addComponent from 'fs-addcomponent'
import Loading from './components/Loading'
let key = null;
export default {
    show: ()=> {
        if (key == null) {
            key = addComponent.add(<Loading />)
        }
    },
    hide: ()=> {
        if (key != null) {
            addComponent.remove(key);
            key = null;
        }
    }
}
