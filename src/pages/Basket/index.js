import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BasketActions from '~/store/ducks/basket';
import Header from '~/components/Header';

import {
  Container,
  ProductList,
  BasketItem,
  ProductImage,
  DetailContainer,
  Name,
  Brand,
  Price,
  QuantityContainer,
  Quantity,
  RemoveItem,
  RemoveItemIcon,
  SubTotalContainer,
  SubTotalText,
  SubTotalPrice,
} from './styles';

const Basket = ({ basket: { products, total } }) => (
  <Container>
    <Header title="Carrinho" />
    <ProductList
      data={products}
      keyExtractor={product => String(product.id)}
      renderItem={({ item: product }) => (
        <BasketItem>
          <ProductImage source={{ uri: product.image }} />
          <DetailContainer>
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
            <Price>
              R$
              {product.price}
            </Price>
          </DetailContainer>
          <QuantityContainer>
            <Quantity keyboardType="numeric" value={String(product.quantity)} />
            <RemoveItem onPress={() => {}}>
              <RemoveItemIcon />
            </RemoveItem>
          </QuantityContainer>
        </BasketItem>
      )}
    />
    <SubTotalContainer>
      <SubTotalText>Subtotal</SubTotalText>
      <SubTotalPrice>
R$
        {total}
      </SubTotalPrice>
    </SubTotalContainer>
  </Container>
);

const TabIcon = ({ tintColor }) => <Icon name="shopping-basket" size={20} color={tintColor} />;
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Basket.navigationOptions = {
  tabBarIcon: TabIcon,
};

Basket.propTypes = {
  basket: PropTypes.shape({
    products: PropTypes.array,
    total: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  basket: state.basket,
});

const mapDispatchToProps = dispatch => bindActionCreators(BasketActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Basket);
