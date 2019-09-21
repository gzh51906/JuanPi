import React, { Component } from 'react';

class Banner extends Component{
    state = {
        bannerImg: 'https://s2.juancdn.com/jas/190919/7/6/5d82ec7333b08953bf352393_1080x312.gif',
        bannerImg1: 'https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png'
    }
    
    render() {
        return (
            <>
                <div className='banner' style={{height:'50%',marginTop:10,marginBottom:10}}>
                    <img src={this.state.bannerImg} style={{height:'5rem',width:'100%'}}/>
                </div>
                <div className='banner1' style={{height:'30%',marginBottom:10}}>
                    <img src={this.state.bannerImg1} style={{height:'3rem',width:'100%'}}/>
                </div>    
            </>   
        )
    }
};

export default Banner;