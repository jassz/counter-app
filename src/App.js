import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters'
import React, { Component } from 'react';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }

  // call at first render 
  // to initialize default value/variable
  constructor(){
    super()
    console.log('App - constuctor');
  }

  // make ajax call to get data from server
  componentDidMount(){
    console.log('App-mounted')
    }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    })
    this.setState({ counters })
  }
  render() {
    console.log('App-Rendered');
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0 ).length} />
        <main className='container'>
          <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
        </main>
      </React.Fragment>

    );
  }

}

export default App;
