import React, { Component } from 'react';
import { Tabs, WhiteSpace, Grid } from 'antd-mobile';
import '../style/tab.css';

class Tab extends Component {
    state = {
        tabs: [{
            title: '精选专场'
        }, {
            title: '精选单品'
        }],
        
        zhuanchang: [{
            id:1001,
            img: 'https://goods7.juancdn.com/goods/190909/d/e/5d75f6bc33b08950912624a4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            logo: 'https://goods4.juancdn.com/seller/170905/6/d/59ae37b68150a10a74136342_180x90.png',
            title: '33元2件任选',
            name: '加贝内衣上新专场',
            date:2
        }, {
            id: 1002,
            img: 'https://goods6.juancdn.com/goods/190915/a/6/5d7de4db33b08956c1387f8f_800x800.jpg?imageMogr2/thumbnail/310x310!',
            logo: 'https://goods3.juancdn.com/bao/170221/5/e/58ac06db151ad11a0b8b45ed_180x90.png',
            title: '79元1件任选',
            name: '酷伽女装上新专场',
            date: 4
            }, {
            id:1003,
            img: 'https://goods7.juancdn.com/goods/190909/d/e/5d75f6bc33b08950912624a4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            logo: 'https://goods4.juancdn.com/seller/170905/6/d/59ae37b68150a10a74136342_180x90.png',
            title: '33元2件任选',
            name: '加贝内衣上新专场',
            date: 2
            }, {
            id:1004,
            img: 'https://goods6.juancdn.com/goods/190915/a/6/5d7de4db33b08956c1387f8f_800x800.jpg?imageMogr2/thumbnail/310x310!',
            logo: 'https://goods3.juancdn.com/bao/170221/5/e/58ac06db151ad11a0b8b45ed_180x90.png',
            title: '79元1件任选',
            name: '酷伽女装上新专场',
            date: 4
        }, {
            id: 1005,
            img: 'https://goods7.juancdn.com/goods/190909/d/e/5d75f6bc33b08950912624a4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            logo: 'https://goods4.juancdn.com/seller/170905/6/d/59ae37b68150a10a74136342_180x90.png',
            title: '33元2件任选',
            name: '加贝内衣上新专场',
            date: 2
        }, {
            id: 1006,
            img: 'https://goods6.juancdn.com/goods/190915/a/6/5d7de4db33b08956c1387f8f_800x800.jpg?imageMogr2/thumbnail/310x310!',
            logo: 'https://goods3.juancdn.com/bao/170221/5/e/58ac06db151ad11a0b8b45ed_180x90.png',
            title: '79元1件任选',
            name: '酷伽女装上新专场',
            date: 4
        }, {
            id: 1007,
            img: 'https://goods7.juancdn.com/goods/190909/d/e/5d75f6bc33b08950912624a4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            logo: 'https://goods4.juancdn.com/seller/170905/6/d/59ae37b68150a10a74136342_180x90.png',
            title: '33元2件任选',
            name: '加贝内衣上新专场',
            date: 2
        }, {
            id: 1008,
            img: 'https://goods6.juancdn.com/goods/190915/a/6/5d7de4db33b08956c1387f8f_800x800.jpg?imageMogr2/thumbnail/310x310!',
            logo: 'https://goods3.juancdn.com/bao/170221/5/e/58ac06db151ad11a0b8b45ed_180x90.png',
            title: '79元1件任选',
            name: '酷伽女装上新专场',
            date: 4
        }, {
            id: 1009,
            img: 'https://goods7.juancdn.com/goods/190909/d/e/5d75f6bc33b08950912624a4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            logo: 'https://goods4.juancdn.com/seller/170905/6/d/59ae37b68150a10a74136342_180x90.png',
            title: '33元2件任选',
            name: '加贝内衣上新专场',
            date: 2
        }, {
            id: 1010,
            img: 'https://goods6.juancdn.com/goods/190915/a/6/5d7de4db33b08956c1387f8f_800x800.jpg?imageMogr2/thumbnail/310x310!',
            logo: 'https://goods3.juancdn.com/bao/170221/5/e/58ac06db151ad11a0b8b45ed_180x90.png',
            title: '79元1件任选',
            name: '酷伽女装上新专场',
            date: 4
            }],
        
        danpin: [{
            id: 2001,
            img: 'https://goods2.juancdn.com/goods/190505/3/1/5cce5823b6f8ea03122cdbbc_800x800.jpg?imageMogr2/thumbnail/310x310!',
            price: '59',
            priceOld: '149',
            title: '条纹拼接衬衫T恤上衣'
        }, {
            id: 2002,
            img: 'https://goods5.juancdn.com/goods/190212/9/b/5c628a60b6f8ea609a240958_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            price: '39',
            priceOld: '99',
            title: '韩束红石榴洁面乳'
        }, {
            id: 2003,
            img: 'https://goods8.juancdn.com/tao/180825/e/5/5b80a7f7b6f8ea2df7248443_800x800.jpg?imageMogr2/thumbnail/310x310!',
            price: '99',
            priceOld: '1299',
            title: '桑蚕丝内胆棉衣外套'
        }, {
            id: 2004,
            img: 'https://goods2.juancdn.com/goods/180306/3/2/5a9d6cce8150a175f7672f22_800x800.jpg?imageMogr2/thumbnail/310x310!',
            price: '185',
            priceOld: '298',
            title: '兰芝气垫粉凝BB霜'
        }, {
            id: 2005,
            img: 'https://goods1.juancdn.com/bao/170805/1/3/59853375a9fcf85a5c435ecc_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310',
            price: '58',
            priceOld: '198',
            title: '潮流修身百搭牛仔裤'
        }, {
            id: 2006,
            img: 'https://goods8.juancdn.com/goods/190216/e/a/5c67891033b08918d3003fd9_800x800.jpg?imageMogr2/thumbnail/310x310!',
            price: '69',
            priceOld: '298',
            title: '网布休闲小白鞋运动鞋'
        }]
    }


    render() {
        return (
            <div className='tab'>
                <Tabs 
                    
                    tabs={this.state.tabs}
                    tabBarActiveTextColor='red'
                    // initialPage={1}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex',flexWrap:'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        {
                            this.state.zhuanchang.map(item =>
                                <div key={item.id} style={{width:'50%',height:'50%',position:'relative',padding:'2%'}}>
                                    <img src={item.img} style={{width:'100%',height:'70%'}}/>
                                    <img src={item.logo} style={{width:'20%',height:'10%',position:'absolute',top:'65%',left:'76%'}}/>
                                    <div style={{ color: '#888', fontSize: '14px'}}>
                                        <div style={{marginTop:10,marginBottom:5}}>
                                            <span style={{fontSize:14,color:'red'}}>{item.title}</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:12,color:'#000',marginRight:20}}>{item.name}</span><span style={{fontSize:12,color:'#000'}}>剩 {item.date} 天</span>
                                        </div>
                                    </div>

                                </div>
                                )
                        }
                    </div>

                    <div style={{ display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        {
                            this.state.danpin.map(item => (
                                <div key={item.id} style={{width:'50%',height:'50%',padding:'2%'}}>
                                    <img src={item.img} style={{width:'100%',height:'70%'}}/>
                                    <div className='priceBox' style={{marginTop:5,marginBottom:5}}><span>￥</span><span>{item.price}</span><del>￥{item.priceOld}</del></div>
                                    <span style={{fontSize:14}}>{item.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
};

export default Tab;