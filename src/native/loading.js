/**
 * Created by guowei on 16/12/20.
 */
import React, { Component } from 'react';
import addComponent from 'fs-addcomponent'
import Loading from './Loading/Loading'
let key = null;
let timeout = null;
export default {
    show: ()=> {
        if (key == null && timeout == null) {
            timeout = setTimeout(()=> {
                key = addComponent.add(<Loading />)
            }, 300);
        }
    },
    hide: ()=> {
        if (timeout != null) {
            clearTimeout(timeout);
            timeout = null;
        }
        if (key != null) {
            addComponent.remove(key);
            key = null;
        }
    }
}
