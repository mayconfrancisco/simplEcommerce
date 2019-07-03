import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ProductList = styled.FlatList`
  padding: ${metrics.baseMargin / 2}px;
`;

export const BasketItem = styled.View`
  margin: ${metrics.baseMargin / 2}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin: ${metrics.baseMargin}px;
  height: 100px;
  width: 50px;
`;

export const DetailContainer = styled.View`
  flex: 1;
  flex-grow: 1;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  margin-bottom
`;

export const Brand = styled.Text`
  margin-top: 0;
  color: ${colors.regular};
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.secundary};
  margin-top: ${metrics.baseMargin}px;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.TextInput`
  /* flex: 1; */
  width: 40px;
  border-color: ${colors.light};
  border-width: 1px;
  padding: ${metrics.baseMargin / 2}px;
`;

export const RemoveItem = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 12,
    right: 12,
    bottom: 12,
    left: 12,
  },
})`
  margin: ${metrics.baseMargin}px;
`;

export const RemoveItemIcon = styled(Icon).attrs({
  name: 'clear',
  size: 20,
  color: colors.regular,
})``;

export const SubTotalContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-top-color: ${colors.light};
  border-top-width: 1px;
`;

export const SubTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.regular};
`;

export const SubTotalPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.secundary};
  margin: ${metrics.baseMargin}px;
`;
