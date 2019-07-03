import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background: ${colors.primary};
  height: 55px;
  justify-content: center;
`;

export const CategoryList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CategoryCheck = styled.TouchableOpacity`
  border-bottom-width: 5px;
  border-bottom-color: ${({ active }) => (active ? colors.white : colors.primary)};
`;

export const CategoryCheckText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: ${metrics.basePadding}px;
`;
