import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containers: {
        position: 'absolute',
        top: 20,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },

    menu: {
        width: 25,
        height: 25,
    },
});

export default styles;