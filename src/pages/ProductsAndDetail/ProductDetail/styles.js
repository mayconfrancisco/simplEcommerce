import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const CardProductDetail = styled.View`
  margin: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 300px;
`;

export const ProductDescription = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const ProductNameBrand = styled.View`
  margin-right: 20px;
  flex: 1;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Brand = styled.Text`
  color: ${colors.regular};
`;

export const Price = styled.Text`
  font-size: 24px;
  color: ${colors.secundary};
  font-weight: bold;
`;

export const AddBasket = styled.TouchableOpacity`
  margin-top: ${metrics.baseMargin * 2}px;
  background-color: ${colors.secundary};
  padding: ${metrics.basePadding}px;
  justify-content: center;
  align-items: center;
`;

export const AddBasketText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
