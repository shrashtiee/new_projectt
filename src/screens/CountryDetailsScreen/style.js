import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.BLACK_COLOR,
    fontSize: 16,
    fontFamily: Fonts.REGULAR,
    width: '65%'
  },
  titleTextStyle: {
    color: Colors.BLACK_COLOR,
    fontSize: 16,
    fontFamily: Fonts.MEDIUM,
    width: '35%'
  },
  headingTextStyle: {
    color: Colors.BLACK_COLOR,
    fontSize: 20,
    fontFamily: Fonts.MEDIUM,
    textAlign: "center",
    marginVertical: 15,
  },
  mainContainer: {
    backgroundColor: Colors.WHITE_COLOR,
    flex: 1,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  innerViewStyle: {
    width: deviceWidth * 0.8,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.WHITE_COLOR,
    marginVertical: 10,
    backgroundColor: Colors.WHITE_COLOR,
    elevation: 6,
    backgroundColor: Colors.WHITE_COLOR,
    marginTop: 50
  }
});

export default styles;