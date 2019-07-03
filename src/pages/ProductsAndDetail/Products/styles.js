import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ProductList = styled.FlatList.attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: ${metrics.baseMargin / 2}px;
`;

export const ProductItem = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin: ${metrics.baseMargin / 2}px;
  border-radius: ${metrics.baseRadius};
  flex-grow: 1;
  flex-basis: 0;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 200px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  margin: ${metrics.baseMargin}px;
  margin-bottom: 0px;
`;
export const Brand = styled.Text`
  color: ${colors.regular};
  margin: 0 ${metrics.baseMargin}px;
`;
export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.secundary};
  margin: ${metrics.baseMargin}px;
`;
