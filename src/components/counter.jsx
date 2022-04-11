import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div class="col-auto">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0} className='btn btn-secondary btn-sm m-2'>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">x</button>
                </div>
            </div>
            // <div>
            //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            //     <button onClick={ () => this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm'>+</button>
            //     <button onClick={ () => this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm'>-</button>
            //     <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm ml-2">Delete</button>
            // </div>
        );
    }
    getBadgeClasses() {
        let counterClass = "badge m-2 badge-";
        counterClass += this.props.counter === 0 ? "warning" : "primary";
        return counterClass;
    }
    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;
