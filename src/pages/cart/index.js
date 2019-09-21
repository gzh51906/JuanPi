import React,{Component} from 'react'
import  {render} from 'react-dom'
import { NavBar, Icon, List, Checkbox,Button ,Stepper} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
import './style/index.css'

class Cart extends Component {
    constructor(){
        super()
        this.state={

            data:[
                { value: 0, label: 'Ph.D.' },
        { value: 1, label: 'Bachelor' },
        { value: 2, label: 'College diploma' },
    ],
            edit:false
        }
    }
onchange(){

}

    onChange = (val) => {
        console.log(val);
    }





    render(){

        return(
            <div>
                <NavBar
                    mode="light"
                    style={{color:"black"}}
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    key='top'
                    rightContent={
                       <span onClick={() => this.setState({edit:!this.state.edit})} style={{marginRight:15}}>{this.state.edit?'编辑':'完成'}</span>
                    }
                >购物车</NavBar>



                <List  className="my-list" >
                    <CheckboxItem key={1} onChange={() => this.onChange("1111")} style={{width:20,float:"left"}} className='checkout'>
                    </CheckboxItem>
                    <List.Item  align="top" thumb="https://goods2.juancdn.com/goods/190314/3/4/5c89c074b6f8ea66da34d907_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" multipleLine>
                        送吸盘儿童注水保温碗
                        <List.Item.Brief>
                            {
                                this.state.edit?
                                    <span style={{fontSize:12,display:"inline-block"}}>灰色&nbsp;4L</span>
                                    :<span style={{fontSize:12}} className='click_span'>灰色&nbsp;&nbsp;4L&nbsp;∨</span>
                            }
                        </List.Item.Brief>
                        <List.Item.Brief>
                            <span style={{color:"red",fontSize:12,float:'left'}}>￥159</span><span style={{fontSize:12,float:'left'}}>&nbsp;&nbsp;&nbsp;</span><del style={{fontSize:12,float:'left'}}>￥199</del>

                            {
                                this.state.edit?
                                    <div style={{float:'right'}}>X1</div>
                                    : <List.Item
                                        wrap
                                        extra={
                                            <Stepper
                                                style={{ width: '100%', minWidth: '80px',position:"absolute",right:-15,top:-5,height:50 }}
                                                showNumber
                                                max={10}
                                                min={1}
                                                value={6}
                                                onChange={this.onChange}
                                            />}
                                    >
                                    </List.Item>
                            }


                                <List>


                                </List>

                        </List.Item.Brief>
                    </List.Item>
                </List>
                <List  className="my-list" >
                    <CheckboxItem key={1} onChange={() => this.onChange("1111")} style={{width:20,float:"left"}} className='checkout'>
                    </CheckboxItem>
                    <List.Item  align="top" thumb="https://goods2.juancdn.com/goods/190314/3/4/5c89c074b6f8ea66da34d907_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" multipleLine>
                        送吸盘儿童注水保温碗
                        <List.Item.Brief>
                            {
                                this.state.edit?
                                    <span style={{fontSize:12,display:"inline-block"}}>灰色&nbsp;4L</span>
                                    :<span style={{fontSize:12}} className='click_span'>灰色&nbsp;&nbsp;4L&nbsp;∨</span>
                            }
                        </List.Item.Brief>
                        <List.Item.Brief>
                            <span style={{color:"red",fontSize:12,float:'left'}}>￥159</span><span style={{fontSize:12,float:'left'}}>&nbsp;&nbsp;&nbsp;</span><del style={{fontSize:12,float:'left'}}>￥199</del>

                            {
                                this.state.edit?
                                    <div style={{float:'right'}}>X1</div>
                                    : <List.Item
                                        wrap
                                        extra={
                                            <Stepper
                                                style={{ width: '100%', minWidth: '80px',position:"absolute",right:-15,top:-5,height:50 }}
                                                showNumber
                                                max={10}
                                                min={1}
                                                value={6}
                                                onChange={this.onChange}
                                            />}
                                    >
                                    </List.Item>
                            }


                            <List>


                            </List>

                        </List.Item.Brief>
                    </List.Item>
                </List>
                <NavBar
                    mode="light"
                    className='Settlement'
                    onLeftClick={() => console.log('onLeftClick')}
                    leftContent={[<CheckboxItem style={{paddingLeft:0}}
                                                key='bottom'
                                                type='warning'
                                                onChange={() => console.log("1111")}/>,
                        <span style={{width:'100%',folat:'left',marginLfet:15,color:'black'}} key={25}>全选</span>]}
                    rightContent={
                        this.state.edit?
                            [<div id='am-navbar-title'key={1}>
                                <div className='pric_top' style={{fontSize:15,position:"relative"}} ><div style={{position:"absolute",bottom:0,right:6}}>合计<span >￥</span><span>0.00</span></div></div>
                                <div className='pric_bot' style={{fontSize:10,position:"relative"}} ><div style={{position:"absolute",top:0,right:6}}>总额<span >￥</span><span>0.00</span>立减<span>0.00</span></div></div>
                            </div>,
                            <Button type="warning" size="large" inline key={2} className='obt' key={2}>去结算(<span>0</span>)</Button>]
                        :[<Button type="primary" size="large" inline key={1} className='obt'>移入收藏夹</Button>,
                        <Button type="warning" size="large" inline key={2} className='obt'>删除</Button>]

                    }
                ></NavBar>


            </div>
               );






    }








}

export default Cart





















import React, {Component} from 'react';

class Cart extends Component{
    render() {
        return (
            <div>CART</div>
        )
    }
};

export default Cart;
