import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { log } from 'util';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

import '~/cate/style/cate.scss'
import Item from '../../../node_modules/antd-mobile/lib/popover/Item';

class Cate extends Component{

    state = {
        catelist: [
            "女装", "男装", "母婴", "鞋子", "箱包", "居家百货", "家电数码", "内衣配饰", "美妆", "运动户外", "美食", "车品文娱", "通讯旅游"
        ],
        tabs :[
            { title: '女装', key: 't1' },
            { title: '男装', key: 't2' },
            { title: '母婴', key: 't3' },
            { title: '鞋子', key: 't4' },
            { title: '箱包', key: 't5' },
            { title: '居家百货', key: 't6' },
            { title: '家电数码', key: 't7' },
            { title: '内衣配饰', key: 't8' },
            { title: '美妆', key: 't9' },
            { title: '运动户外', key: 't10' },
            { title: '美食', key: 't11' },
            { title: '车品文娱', key: 't12' },
            { title: '通讯旅游', key: 't13' }
          ],
          tabPosition:'left'
       
    }
    
    componentDidMount(){

    }
    render() {      
          let {catelist,tabs,tabPosition} = this.state
      
          
        return (
            <div className='cate'>
               <div className='nav'> <Tabs tabPosition={tabPosition}>          
                    {tabs.map((item, i) => (<TabPane tab={item.title} key={i}>{item.title}</TabPane>))}
                </Tabs></div>
            </div>
         
        )
    }
};

export default Cate;