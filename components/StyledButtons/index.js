import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButtons = (props) => {
    // This below three lines can be written in one line
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} >
                <Text style={[styles.text, { color: textColor }]} onPress={() => onPress()}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButtons;
