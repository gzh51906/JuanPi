import React, { Component } from 'react';
import Search from './components/seach';
import Swiper from './components/swiper';
import Nav from './components/nav';
import Discount from './components/discount';
import Banner from './components/banner';
import Tab from './components/tab';

class Home extends Component{
    render() {
        return (
            <div className="home">
                <Search />
                <Swiper style={{ height: 400 }} />
                <Nav />
                <Discount />
                <Banner />
                <Tab />
                {/* <Main /> */}
            </div>
        )
    }
};

export default Home;