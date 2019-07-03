import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Title, BackButton, IconBack,
} from './styles';

const Header = ({ title, navigation }) => (
  <Container>
    {navigation && (
      <BackButton onPress={() => navigation.goBack()}>
        <IconBack />
      </BackButton>
    )}
    <Title>{title}</Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

Header.defaultProps = {
  navigation: null,
};

export default Header;
