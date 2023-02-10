import React, { Component } from 'react'

export class Card1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }

    stop = () =>{
        this.setState({
            count : 0
        })
    }


    render() {
        return (
          <div style={{marginLeft:'200px'}}>
              <p>{this.state.count}</p>
              <button onClick={this.increment}>Add</button>
              <button onClick={this.decrement}>Decrease</button>
              <button onClick={this.stop}>Stop</button>
          </div>
        )
    }
}

export default Card1