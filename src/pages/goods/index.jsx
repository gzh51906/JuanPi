import React, { Component } from 'react';
import { Row, Col ,Icon,Drawer, Button, Radio} from 'antd';
import { log } from 'util';

import { Carousel, WingBlank ,Stepper,TabBar } from 'antd-mobile';

import Api from '@/api';

import '~/goods/style/goods.scss'

const RadioGroup = Radio.Group;


class Goods extends Component{

    state = {
        tabs :[] ,      
        data: ['5a3ba71e8150a1297311f172_800x800.jpg', '5a18f372a9fcf8897d6caa79_800x800.jpg', '5a3b2201a9fcf8a7ad45bd36_800x800.jpg'],
        imgHeight: 176,  
        visible: false, 
        placement: 'bottom' ,
        val:1
      
               
    }
    
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };

      onChange1 = (val) => {
        this.setState({ val });
      }
   async componentDidMount(){

    let {classify,id} = this.props.match.params;     
    let {data:tabs} = await Api.getgoods(id,classify);    

      this.setState({tabs});
      this.setState({data:[tabs[0].imgurl,'5a3ba71e8150a1297311f172_800x800.jpg','5a3b2201a9fcf8a7ad45bd36_800x800.jpg']})
          
    }
   
  
    render() {      
          let {tabs,val,data} = this.state
        
          tabs.length != 0
          ? console.log(tabs,val)
          :''
        return (
          tabs.length != 0
          ?
          
            <div className='goods' style={{padding: '0px 0px',background:'#f9f9f9'}}>
             <div style={{height:this.state.imgHeight}}>
             <WingBlank>
        <Carousel
          autoplay={false}
          infinite

        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`../../../public/img/${val}`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank> 
             </div>
             <div className='describe' style={{padding: '0px 0px',background:'#fff'}}>
             <Row type="flex" justify="space-around" style={{padding: '15px 16px'}}>
      <Col span={12}>
      <span style={{color:'#ff464e',fontSize:'20px',margin:'0 5px'}}>¥{tabs[0].newprice}</span>
               <del>¥{tabs[0].oldprice}</del>
               <span style={{background:'#ff464e',borderRadius:'2px',color:'#fff',padding:'1px',marginLeft:'10px'}}>包邮</span>       
      </Col>
      <Col span={12} style={{textAlign: 'right'}}>10086人已购</Col>
            </Row>
             </div>
             <div style={{background:'#fff'}}>
                 <Row>
                 <Col span={20} ><p style={{fontSize:'16px',color:'#000',marginLeft:'15px'}}>
                 {tabs[0].name}</p> </Col>
                 <Col span={40} ><Icon type="heart" style={{color:'pink',fontSize:'25px'}}  />  </Col>
                 </Row>
             </div>
             <div className='log' style={{height:'60px',lineHeight:'60px',marginTop:'10px', marginBottom:'10px', background:'#fff'}}>
                 <span> 24小时发货</span> <span>7天包退</span> <span>售后补贴</span>
             </div>

                   <div style={{height:'50px',background:'#fff'}}>
                    <p style={{height:'50px',lineHeight:'50px',padding:'0 15px'}} onClick={this.showDrawer}>请选择 : 颜色 、尺码<Icon type="right" style={{marginLeft:'190px'}}/></p>

        <Drawer style={{}}
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          height='450px'
          destroyOnClose='true'
        >
          <div  className='pic'>
          <Row style={{height:'100%px',position:'relative'}} gutter={14}>
      <Col span={8}><img src={require(`../../../public/img/${this.state.data[0]}`)} alt="" /></Col>
      <Col span={16} >
     <div style={{fontSize:'20px',color:'red'}}>¥28</div>
     <div>请选择 颜色 尺码</div>
      </Col>
    </Row>
          </div>
          <div>
            <Row style={{marginBottom:'10px'}}>
              <Col span={24} style={{fontSize:'16px'}}>颜色</Col>
            </Row>
            <Row gutter={16}>
            <Radio.Group  buttonStyle="solid">
      <Col className="gutter-row" span={8}>
      <Radio.Button className="gutter-box" value="S">红</Radio.Button>
      </Col>
      <Col className="gutter-row" span={8}>
      <Radio.Button className="gutter-box" value="1">黄</Radio.Button>
      </Col>
      <Col className="gutter-row" span={8}>
      <Radio.Button className="gutter-box" value="2">蓝</Radio.Button>
      </Col>
      <Col className="gutter-row" span={8}>
      <Radio.Button className="gutter-box" value="3">绿</Radio.Button>
      </Col>
      <Col className="gutter-row" span={8}>
      <Radio.Button className="gutter-box" value="4">紫</Radio.Button>
      </Col>
      </Radio.Group>
    </Row>
          </div>
          <div className='size'>
          <Row style={{marginBottom:'10px'}}>
              <Col span={24} style={{fontSize:'16px'}}>尺码</Col>
            </Row>
            <Row gutter={16}>
            <Radio.Group  buttonStyle="solid"> 
            {tabs[0].size.map(item=>{
              return (
                <Col className="gutter-row" span={8} key={item}>
      <Radio.Button className="gutter-box" value={item}>{item}</Radio.Button>
      </Col>
              )
            })}
    
      </Radio.Group>
    </Row>
          </div>
          <div className='num'>
        <Row>
          <Col span={12} style={{fontSize:'16px'}}>购买数量</Col>
          <Col span={12}> 
          <Stepper
              style={{ width: '80%', minWidth: '50px' }}
              showNumber
              max={99}
              min={1}
              value={this.state.val}
              onChange={this.onChange1}
            /> </Col>
        </Row>
          </div>
          <div>
          <Row>
          <Col span={24} style={{fontSize:'16px'}}>
          <Button type="danger" block>
      确认
    </Button></Col>
          </Row>
          </div>
        </Drawer>
      </div>
          <div style={{width:'100%'}}>
            <img src={require(`../../../public/img/dp.png`)} alt="" style={{width:'100%'}}/>
            </div>   
            <div style={{width:'100%'}}>
            <img src={require(`../../../public/img/tabs.png`)} alt="" style={{width:'100%'}}/>
              </div> 
              <div style={{width:'100%'}}>
              <img src={require(`../../../public/img/${data[0]}`)} alt="" style={{width:'100%'}}/> 
              </div>
             
              <div style={{position: 'fixed', bottom: 0, width: '100%', zIndex: 2,background:'#fff'}}>
              <Row style={{height:'48px'}}>
      <Col span={5} className='home' onClick={()=> this.props.history.push('/home')}>
      <Icon type="home" style={{marginTop:'5px'}}/>
      <span style={{textAlign:'center',padding:'4px 0'}}>
        首页
      </span>
      </Col>
      <Col span={5} className='home' onClick={()=> this.props.history.push('/cart')}>
      <Icon type="shopping-cart" style={{marginTop:'5px'}}/>
      <span style={{textAlign:'center',padding:'4px 0'}}>
        购物车
      </span>
      </Col>
      <Col span={7} style={{height:'48px',lineHeight:'48px',textAlign:'center'}} onClick={()=> this.props.history.push('/cart')}>立即购买</Col>
      <Col span={7} style={{height:'48px'}}><Button type="danger" style={{width:'100%',height:'100%',borderRadius:'0px'}}>
         加入购物车
        </Button></Col>
    </Row>
              </div>
            </div>
  :''
        )
      
    }

};

export default Goods;