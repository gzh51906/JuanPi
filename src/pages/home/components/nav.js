import React, { Component } from 'react';
import { Grid, WhiteSpace} from 'antd-mobile';

class Nav extends Component{
    state = {
        navList: [
            'https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png',
            'https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png',
            'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png',
            'https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png'
        ]
    }

    render() {
        return (
            <div className='nav'>
                <Grid
                    data={this.state.navList}
                    columnNum={4}
                    hasLine={false}
                    itemStyle={{width:'25%',borderBottom:'1px solid #ccc'}}
                    renderItem={dataItem => (
                            <div>
                            <img src={dataItem} style={{ width: '100%', height: '100%' }}/>
                            </div>
                        )}
                />
                <WhiteSpace/>
            </div>
        )
    }
};

export default Nav;