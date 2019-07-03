import { StatusBar, Platform } from 'react-native';
import { colors } from '~/styles';

StatusBar.setBarStyle('dark-content');

if (Platform.OS === 'android') {
  if (Platform.Version >= 23) {
    StatusBar.setBackgroundColor(colors.white);
  } else {
    StatusBar.setBarStyle('light-content');
  }
}
