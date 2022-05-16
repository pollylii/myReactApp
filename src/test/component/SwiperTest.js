import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination])

export default class SwiperTest extends Component {
    componentDidMount() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
              },
        })
    }
    render() {
        return (
            <div>
                <div className="swiper" style={{height:'200px',background:'red'}}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
