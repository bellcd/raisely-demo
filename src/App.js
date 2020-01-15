import React from 'react';
import './App.css';
import InfoForm from './InfoForm';
import AmountForm from './AmountForm';
import CardForm from './CardForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      yourmessage: '',
      currentForm: 0,
      amount: 0,
      stripe: '',
      elements: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  loadStripe() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://js.stripe.com/v3`;

      script.addEventListener('load', () => {
        resolve(script);
      });

      script.addEventListener('error', () => {
        reject(new Error(`${script.src} failed to load!`));
      })

      document.querySelector('body').appendChild(script);
    });
  }

  componentDidMount() {

    this.loadStripe()
      .then(() => fetch(`https://api.raisely.com/v3/campaigns?access_token=raisely-sk-289dd554e685de53e3eef3088fcddbb7`))
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.data[0].name,
          stripe: window.Stripe('pk_test_L4EeeUCpmXfwoAtJtBrkXclu005DiyNPwx')
        });
      })
      .catch(err => {
        console.log('Something went wrong!');
        console.error(err);
      })
  }

  handleChange(e) {
    this.setState({ [e.target.dataset.reactname]: e.target.value })
  }

  handleNext(e) {
    this.setState((state, props) => {
      return { currentForm: state.currentForm + 1}
    });
  }

  render() {
    let form;
    if (this.state.currentForm === 0) {
      form = <AmountForm handleChange={this.handleChange} handleNext={this.handleNext}></AmountForm>
    } else if (this.state.currentForm === 1) {
      form = <InfoForm handleChange={this.handleChange} handleNext={this.handleNext}></InfoForm>
    } else if (this.state.currentForm === 2) {
      form = <CardForm stripe={this.state.stripe} elements={this.state.elements} handleChange={this.handleChange} handleNext={this.handleNext}></CardForm>
    }

    return (
      <>
        <h1>{this.state.name}</h1>
        <div className="form-wrapper">
          {form}
        </div>
      </>
    );
  }
}

export default App;
