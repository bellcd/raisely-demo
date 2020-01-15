import React from 'react';
class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: '',
      cardErrors: null
    }

    this.handleDonation = this.handleDonation.bind(this);
  }

  componentDidMount() {
    const elements = this.props.stripe.elements();
    const card = elements.create('card');
    card.mount('#card-element');
    this.setState({ card })
  }

  handleDonation(e) {
    e.preventDefault();
    this.props.stripe.createToken(this.state.card)
      .then((token) => {
        console.log(token)

        // You would send this token.id to your server (along with the user's name, amount, message, etc... from state)
        // and then use that (along with your secret key - that's why this has to happen on the server!)
        // to actually create the charge on Stripe

        // use 4242 4242 4242 4242 as a test card
      })
      .catch(cardErrors => {
        this.setState({ cardErrors });
      });
  }

  render() {
    return (
      <>
        <form>
          <label>
            Credit or Debit Card
            <div id="card-element">
            </div>
            <div id="card-errors" role="alert">
              {this.state.cardErrors}
            </div>
          </label>

          <button className="submit-button" onClick={this.handleDonation} >Donate</button>
        </form>
      </>
    );
  }
}

export default CardForm;