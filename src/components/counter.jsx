import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    // constructor() {
    //    super()
    //    this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return(
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement(this.state.count) } className='btn btn-secondary btn-sm'>Increment</button>
        </div>
        );
    }
    getBadgeClasses() {
        let counterClass = "badge m-2 badge-";
        counterClass += this.state.count === 0 ? "warning" : "primary";
        return counterClass;
    }
    formatCount(){
        const { count } = this.state
       return count === 0 ? 'Zero' : count 
    }
}
 
export default Counter ;
