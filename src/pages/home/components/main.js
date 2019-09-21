import React, {Component} from 'react';
import { Grid } from 'antd-mobile';

class Main extends Component{   
    state = {
        goodslist:[]
    }


    render() {
        return (
            <div>
                <Grid data={data1}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                        <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span>I am title..</span>
                        </div>
                        </div>
                    )}
                />
            </div>
        )
    }
};

export default Main;