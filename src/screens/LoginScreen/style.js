import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: 30,
    color: Colors.BLACK_COLOR,
    marginBottom: 40,
    textAlign: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: Colors.BLACK_COLOR
  },
  loginBtn: {
    width: deviceWidth * 0.8,
    backgroundColor: Colors.BUTTON_COLOR,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  buttonText: {
    color: Colors.WHITE_COLOR,
    fontSize: 18,
    fontFamily: Fonts.BOLD
  },
  textStyle: {
    fontSize: 16,
    fontFamily: Fonts.REGULAR,
    color: Colors.BLACK_COLOR
  },
  signUpText: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    color: Colors.BLACK_COLOR,
    paddingLeft: 5
  },
  passwordEye: {
    padding: 5,
    marginRight: 8,
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});

export default styles;