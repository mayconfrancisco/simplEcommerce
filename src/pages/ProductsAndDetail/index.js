import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Products from '~/pages/ProductsAndDetail/Products';
import ProductDetail from '~/pages/ProductsAndDetail/ProductDetail';

const TabIconProducts = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;
TabIconProducts.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default createStackNavigator(
  {
    Products,
    ProductDetail,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    navigationOptions: {
      tabBarIcon: TabIconProducts,
    },
  },
);
