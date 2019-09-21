import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import '../style/discount.css'
class Discount extends Component{
    state = {
        data: [{
            type: 'second',
            url: 'https://s2.juancdn.com/jas/190919/d/0/5d82d403b6f8ea7ba60fcf6e_540x656.gif'
        }, {
            type: 'clear',
            url: 'https://goods6.juancdn.com/jas/190918/a/c/5d81e8c233b0894931667d35_540x328.png?imageMogr2/quality/85!/format/png'
        }, {
            type: 'cheap',
            url: 'https://goods4.juancdn.com/jas/190918/7/2/5d81e8da33b089470d5bcbf4_540x328.png?imageMogr2/quality/85!/format/png'
        }]
    }

    render() {
        return (
            <div className='discount'>
                {
                    this.state.data.map(item => {
                        return (
                            <div className={item.type} key={item.type}>
                                <img src={item.url}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};

export default Discount;