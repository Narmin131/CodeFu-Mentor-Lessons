import axios from 'axios';
import React, { Component } from 'react'
import Card from './Card';


export class Cards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data)
                this.setState({ myData: res.data })
                console.log(this.state.myData);
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <section className='products'>
                <div className="container">
                    <div className="row">
                        {/* {
                            this.state.myData.map((product, index) => (
                                <div className="col-lg-4">
                                    <div className='myBox'>
                                        <h2>{product.title}</h2>
                                        <div className="img">
                                            <img src={product.image} alt="" className='front' />
                                            <img src={hodie} alt="" className='back' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        } */}

                        {
                            this.state.myData.map((product, index) => (
                                <Card img={product.image}/>
                            ))
                        }






                    </div>
                </div>


            </section>
        )
    }
}

export default Cards