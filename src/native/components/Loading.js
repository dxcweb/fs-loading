/**
 * Created by guowei on 16/12/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Modal,
    Text,
    ActivityIndicator
} from 'react-native';
import Block from 'fs-flex'
const styles = StyleSheet.create({
    main: {
        width: 78,
        height: 78,
        borderRadius: 10,
        padding: 15,
        backgroundColor: "rgba(1, 1, 1, 0.8)"
    },
    text: {
        color: "#fff"
    }
});
class Loading extends Component {
    render() {
        const {isShow=true}=this.props;
        return <Modal
            visible={isShow}
            transparent={true}
        >
            <Block f={1} a="c" j="c">
                <Block style={styles.main} a="c" vh j="c">
                    <ActivityIndicator
                        color="white"
                        size="large"
                        style={{ flex: 1 }}
                    />
                </Block>
            </Block>
        </Modal>
    }
}
export default Loading
