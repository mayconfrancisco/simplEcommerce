import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '~/store/ducks/categories';

import Loading from '~/components/Loading';
import {
  Container, CategoryList, CategoryCheck, CategoryCheckText,
} from './styles';

class Categories extends Component {
  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    setCurrentCategory: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.array,
      current: PropTypes.number,
      loading: PropTypes.bool,
    }).isRequired,
  }

  componentDidMount() {
    const { getCategoriesRequest } = this.props;
    getCategoriesRequest();
  }

  handleCategory = ({ id }) => {
    const { setCurrentCategory } = this.props;
    setCurrentCategory(id);
  };

  render() {
    const {
      categories: { data, current, loading },
    } = this.props;

    return (
      <Container>
        {loading ? (
          <Loading color="#FFF" />
        ) : (
          <CategoryList
            data={data}
            keyExtractor={category => String(category.id)}
            renderItem={({ item: category }) => (
              <CategoryCheck
                active={category.id === current}
                onPress={() => {
                  this.handleCategory(category);
                }}
              >
                <CategoryCheckText>{category.title}</CategoryCheckText>
              </CategoryCheck>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
