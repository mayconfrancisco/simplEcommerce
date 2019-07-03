import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  height: ${54 + metrics.statusBarMargin};
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.primary};
  margin-top: ${metrics.statusBarMargin};
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
  },
})`
  position: absolute;
  left: ${metrics.baseMargin};
  top: ${metrics.statusBarMargin + 16};
`;

export const IconBack = styled(Icon).attrs({
  name: Platform.OS === 'android' ? 'md-arrow-back' : 'ios-arrow-back',
  size: 20,
  color: colors.regular,
})``;
