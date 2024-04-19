import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE_COLOR
    },
    fetchButtonStyle: {
        backgroundColor: Colors.BUTTON_COLOR,
        padding: 14,
        width: deviceWidth * 0.40,
        borderRadius: 25,
        alignSelf: 'flex-end',
        marginRight: 25,
    },
    innerViewStyle: {
        flexDirection: 'row',

    },
    buttonText: {
        color: Colors.WHITE_COLOR,
        fontFamily: Fonts.BOLD,
        textAlign: "center",
        fontSize: 18
    },
    buttonView: {
        height: deviceHeight * 0.1,
        justifyContent: 'center',
    },
    itemStyle: {
        height: 100,
        width: deviceWidth * 0.93,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.WHITE_COLOR,
        marginVertical: 10,
        backgroundColor: Colors.WHITE_COLOR,
        alignSelf: 'center',
        elevation: 6,
        backgroundColor: Colors.WHITE_COLOR,
        padding: 10,
        justifyContent: 'center'
    },
    flatlistView: {
        width: deviceWidth * 0.95,
        alignContent: 'center',
    },
    imageViewStyle: {
        height: 25,
        width: 40,
        marginLeft: 10
    },
    imageStyle: { height: '100%', width: '100%', resizeMode: 'cover' },
    textStyle: {
        fontSize: 16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK_COLOR,
    }
});

export default styles;