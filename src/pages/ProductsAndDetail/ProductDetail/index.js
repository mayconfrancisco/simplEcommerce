import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasketActions from '~/store/ducks/basket';

import Header from '~/components/Header';
import {
  Container,
  CardProductDetail,
  ProductImage,
  ProductDescription,
  Name,
  Brand,
  Price,
  ProductNameBrand,
  AddBasket,
  AddBasketText,
} from './styles';

const ProductDetail = ({ navigation, addProduct }) => {
  const product = navigation.getParam('product');
  return (
    <Container>
      <Header title="Detalhes do Produto" navigation={navigation} />
      <CardProductDetail>
        <ProductImage source={{ uri: product.image }} />
        <ProductDescription>
          <ProductNameBrand>
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
          </ProductNameBrand>
          <Price>
            R$
            {product.price}
          </Price>
        </ProductDescription>
        <AddBasket
          onPress={() => {
            addProduct(product);
            // TODO: implementar feedback visual com a adicao do item ao carrinho
            navigation.goBack();
          }}
        >
          <AddBasketText>Adicionar ao carrinho</AddBasketText>
        </AddBasket>
      </CardProductDetail>
    </Container>
  );
};

ProductDetail.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(BasketActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetail);
