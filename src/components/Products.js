import React, { Component } from 'react';
import Product from './Product';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <Container maxWidth="md" className="cardGrid">
      {/* End hero unit */}
      <Grid container spacing={4}>

       {products}

      </Grid>
      </Container>
    );
  }
}

export default Products;
