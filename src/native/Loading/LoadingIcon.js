/**
 * Created by guowei on 16/12/20.
 */
import React, { Component } from 'react';
import addComponent from 'fs-addcomponent'
import {
    StyleSheet,
    Animated,
    Easing
} from 'react-native';
import Block from 'fs-flex'
const AnBlock = Animated.createAnimatedComponent(Block);
const styles = StyleSheet.create({
    circle: {
        width: 7,
        height: 7,
        backgroundColor: "#fff",
        borderRadius: 7,
        position: 'absolute'
    },
    circle1: {
        top: 0, left: 0
    },
    circle2: {
        top: 0, right: 0
    },
    circle3: {
        right: 0, bottom: 0
    },
    circle4: {
        left: 0, bottom: 0
    },
    container2: {
        transform: [
            {rotateZ: "45deg"}
        ]
    },
    container: {
        width: 30,
        height: 30,
        position: "absolute"
    }
});
export default class LoadingIcon extends Component {
    state = {
        anim: [0, 1, 2, 3, 4, 5, 6, 7].map(()=> {
            return new Animated.Value(0);
        })
    };

    animated(key) {
        const timing = Animated.timing;
        const me = this;
        Animated.sequence([
            timing(this.state.anim[key], {
                delay: 0,
                easing: Easing.inOut(Easing.ease),
                toValue: 1, // 目标值
                duration: 480 // 动画时间
            }),
            timing(this.state.anim[key], {
                delay: 0,
                easing: Easing.inOut(Easing.ease),
                toValue: 0, // 目标值
                duration: 480 // 动画时间
            }),
            timing(this.state.anim[key], {
                delay: 0,
                easing: Easing.inOut(Easing.ease),
                toValue: 0, // 目标值
                duration: 240 // 动画时间
            })
        ]).start(
            ()=> {
                me.animated(key)
            }
        );
    }

    componentDidMount() {
        const me = this;
        [7, 0, 4, 1, 5, 2, 6, 3].map((key, i)=> {
            setTimeout(()=> {
                me.animated(key)
            }, i * 150);
        });
    }

    render() {
        const {anim}=this.state;
        return <Block h={30} w={30}>
            <Block style={[styles.container]}>
                <AnBlock style={[styles.circle,styles.circle1,{transform:[{scale:anim[0]}]}]}/>
                <AnBlock style={[styles.circle,styles.circle2,{transform:[{scale:anim[1]}]}]}/>
                <AnBlock style={[styles.circle,styles.circle3,{transform:[{scale:anim[2]}]}]}/>
                <AnBlock style={[styles.circle,styles.circle4,{transform:[{scale:anim[3]}]}]}/>
            </Block>
            <Block style={[styles.container,styles.container2]}>
                <AnBlock style={[styles.circle,styles.circle1,{transform:[{scale:anim[4]}]}]}/>
                <AnBlock style={[styles.circle,styles.circle2,{transform:[{scale:anim[5]}]}]}/>
                <AnBlock style={[styles.circle,styles.circle3,{transform:[{scale:anim[6]}]}]}/>
                <AnBlock style={[styles.circle,styles.circle4,{transform:[{scale:anim[7]}]}]}/>
            </Block>
        </Block>
    }
}
