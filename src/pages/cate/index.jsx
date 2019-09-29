import React, { Component } from 'react';
import { Row, Col,Tabs } from 'antd';
import { log } from 'util';
import { Grid } from 'antd-mobile';
import Search from './components/seach';

import Api from '@/api';

const { TabPane } = Tabs;

import '~/cate/style/cate.scss'


class Cate extends Component{

    state = {
        tabs :[],        
       tabPosition:'left',
       classify:'女装'
         
    }
    
   async componentDidMount(){
            let {data:tabs} = await Api.getTabs();
            console.log(tabs);
            
            this.setState({tabs})
            
    }
   
    classify=(activeKey)=>{
             this.setState({classify:activeKey})
    }

    golist = (Key)=>{
       // console.log(this.state.classify,Key.text);
        let classify = this.state.classify;
        let id = Key.text
        this.props.history.push(`/list/${classify}/${id}`)
        
    }
    render() {      
          let {tabs,tabPosition} = this.state
       console.log(tabs);
       
        return (
            
            <div className='cate'>
               <Search/>
               <div className='nav'> <Tabs tabPosition={tabPosition} onChange={this.classify}>          
                    {tabs.map(item => (<TabPane tab={item.title} key={item.key}>
                        <Grid data={item.classify} activeStyle={false} columnNum={3} hasLine={false} onClick={this.golist}/>
                    </TabPane>))}
                </Tabs></div>
                
            </div>
    
        )
    }
};

export default Cate;