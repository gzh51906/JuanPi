import React, { Component } from 'react';
import { Row, Col} from 'antd';
import { Icon,NavBar,Popover} from 'antd-mobile';
import { log } from 'util';

import '~/list/style/list.scss'
import Goods from './components/goods';
const Item = Popover.Item;

class List extends Component{

    state={
        title:'T恤'
    }

    more = ()=>{
        console.log(1);
        
    }

    onSelect = info=>{
         console.log(info);
         this.props.history.push(`${info.props.value}`)
    }

    componentDidMount(){
       let title =   this.props.match.params.id;
       this.setState({title})
      
    }

    render() {
        let {title} = this.state;
        return (
            <div className='list' style={{overflow:'hidden'}}>
           <NavBar 
      mode="light"
      icon={<Icon type="left"  color='#999' size='lg'  />}
      onLeftClick={() => this.props.history.push(`/cate`)}
      rightContent={[
        <Icon key="0" type="search" color='#999' style={{ marginRight: '16px' }} />,
        <Popover mask 
            key="33"
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor'}}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="/home" >首页</Item>),
              (<Item key="5" value="special"  style={{ whiteSpace: 'nowrap' }}>我的收藏</Item>),
              (<Item key="6" value="button ct" >
                <span style={{ marginRight: 5 }}>我的订单</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
         
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
            <Icon key="1" type="ellipsis" color='#999' style={{ marginRight: '16px' }}/>
            </div>
          </Popover>
      ]} >
   {title}</NavBar>
     <Goods obj={this.props}/>
            </div>
           
        )
    }
};

export default List;