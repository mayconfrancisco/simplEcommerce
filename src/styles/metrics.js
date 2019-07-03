import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { height, width } = Dimensions.get('window');
const statusBarMargin = Platform.OS === 'android' ? 0 : getStatusBarHeight();

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarMargin,
};
