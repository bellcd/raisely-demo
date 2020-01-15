import React from 'react';
class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elements = this.props.stripe.elements();
    const card = elements.create('card');
    card.mount('#card-element');
  }

  render() {
    return (
      <>
        <form>
          <label>
            Credit or Debit Card
            <div id="card-element">
            </div>
            <div id="card-errors" role="alert"></div>
            {/* <input type="number" name="amount" placeholder="10" onChange={handleChange} data-reactname="amount"></input> */}
          </label>

          <button className="submit-button" data-currentform="0">Next</button>
        </form>
      </>
    );
  }
}

export default CardForm;