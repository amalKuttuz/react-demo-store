import React, { Component } from 'react';
import MobileNav from '../global/Mobile/MobileNav';
import MailingList from '../global/MailingList';
import Footer from '../global/Footer';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return(state)
}

var subtotal = 0;

class Cart extends Component {

  render() {

    var toCheckout = () => {
      this.props.dispatch((dispatch) => {
        dispatch(push('/checkout'))
      })
    }

    if (this.props.cart.fetched === true) {
      subtotal = '$' + this.props.cart.cart.meta.display_price.with_tax.amount/100;
    }

    return (
      <div>
        <MobileNav />
        <CartHeader />
        <main role="main" id="container" className="main-container push">

          <section className="cart">
            <div className="content">

              <form className="cart-listing" method="post" noValidate>
                <div className="cart-list-headings">

                     <div className="cart-product-header">Product</div>
                     <div className="cart-header-group">
                         <div className="cart-empty-header"></div>
                         <div className="cart-quantity-header">Quantity</div>
                         <div className="cart-price-header">Price</div>
                     </div>

                </div>
                <CartItems />
                <div className="total-price">
                  Subtotal <span className="price">{subtotal}</span>
                </div>
                <button type="submit" className="submit" href="/checkout" onClick={() => toCheckout()}>Checkout</button>
              </form>
            </div>
          </section>
          <MailingList />
          <Footer />
        </main>
      </div>
    )
  };
};

export default connect(mapStateToProps)(Cart);
