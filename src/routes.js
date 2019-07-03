import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import ProductsAndDetail from '~/pages/ProductsAndDetail';
import Basket from '~/pages/Basket';

import { colors } from '~/styles';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      ProductsAndDetail,
      Basket,
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.light,
      },
    },
  ),
);

export default Routes;
