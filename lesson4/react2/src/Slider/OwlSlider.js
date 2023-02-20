import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlSlider = () => {
    const options = {
       loop:true,
       items:4,
       dots:false,
       nav:true,
       autoplay:true,
       autoplayTimeout:1000,
       autoplayHoverPause:true,
       smartSpeed:2000,
       responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
    }
    return (
        <section>
            <OwlCarousel className='owl-theme' {...options} >
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default OwlSlider