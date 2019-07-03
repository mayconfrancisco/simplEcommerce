import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductActions from '~/store/ducks/products';

import Header from '~/components/Header';
import Categories from '~/components/Categories';
import Loading from '~/components/Loading';

import {
  Container,
  ProductList,
  ProductItem,
  Name,
  ProductImage,
  Brand,
  Price,
} from './styles';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class Products extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    currentCategory: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool,
    }).isRequired,
  }

  static defaultProps = {
    currentCategory: null,
  }

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCategory !== this.props.currentCategory) {
      this.loadProducts();
    }
  }

  handleProductDetail = (product) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail', { product });
  }

  loadProducts() {
    const { getProductsRequest } = this.props;
    getProductsRequest();
  }

  render() {
    const {
      products: { data, loading },
    } = this.props;

    return (
      <Container>
        <Header title="SimplEcommerce" />
        <Categories />

        {loading ? (
          <Loading size="large" />
        ) : (
          <ProductList
            data={data}
            keyExtractor={product => String(product.id)}
            renderItem={({ item: product }) => (
              <ProductItem onPress={() => this.handleProductDetail(product)}>
                <ProductImage source={{ uri: product.image }} />
                <Name>{product.name}</Name>
                <Brand>{product.brand}</Brand>
                <Price>
                  R$
                  {product.price}
                </Price>
              </ProductItem>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentCategory: state.categories.current,
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
