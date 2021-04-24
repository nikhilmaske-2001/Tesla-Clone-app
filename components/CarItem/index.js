import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButtons from '../StyledButtons'

const CarItem = (props) => {

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,800</Text>
            </View>
            <StyledButtons
                type="primary"
                content={'Custom Order'}
                onPress={() => {
                    console.warn('Custom Order was pressed!');
                }}
            />

            <StyledButtons
                type="secondary"
                content={'Existing Inventory'}
                onPress={() => {
                    console.warn('Existing Inventory was pressed!');
                }}
            />
        </View>
    );
};

export default CarItem;
