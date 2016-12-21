/**
 * Created by guowei on 16/12/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Modal,
    Text
} from 'react-native';
import Block from 'fs-flex'
import LoadingIcon from './LoadingIcon'
const styles = StyleSheet.create({
    main: {
        width: 190,
        height: 108,
        borderRadius: 5,
        padding: 15,
        backgroundColor: "rgba(1, 1, 1, 0.6)"
    },
    text: {
        color: "#fff",
    }
});
class Loading extends Component {
    render() {
        const {title='数据加载中',isShow=true}=this.props;
        return <Modal
            visible={isShow}
            transparent={true}
        >
            <Block f={1} a="c" j="c">
                <Block style={styles.main} a="c" vh j="c">
                    <Block h={54}>
                        <LoadingIcon />
                    </Block>
                    <Text style={styles.text}>{title}</Text>
                </Block>
            </Block>
        </Modal>
    }
}
export default Loading
