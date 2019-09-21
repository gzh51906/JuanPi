import React, { Component } from 'react';
import { WhiteSpace, Carousel } from 'antd-mobile';
class Swiper extends Component{
    state = {
        imgUrl: ['https://goods5.juancdn.com/jas/190920/8/d/5d84266bb6f8ea71992121e4_1080x418.jpg',
                 'https://goods7.juancdn.com/jas/190917/c/8/5d80819c33b0893b782b33a0_1080x418.jpg',
                 'https://goods5.juancdn.com/jas/190920/8/d/5d84266bb6f8ea71992121e4_1080x418.jpg',
                 'https://goods8.juancdn.com/jas/190919/e/1/5d83298cb6f8ea203f642b48_1080x418.jpg',
                 'https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png']
    }

    render() {
        return (
            <div className='swiper' >
                <WhiteSpace/>
                <Carousel
                    autoplay={true}
                    infinite
                    dotStyle={{ background: '#ccc' }}
                    dotActiveStyle={{ background: 'orange' }}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    
                    {
                            this.state.imgUrl.map(item => {
                                return (
                                <img
                                    src={item}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    key={item}
                                // onLoad={() => {
                                // // fire window resize event to change height
                                // window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                // }}
                                    />
                                )
                            })
                    }
                     </Carousel>
                <WhiteSpace/>

            </div>
        )
    }
};

export default Swiper;