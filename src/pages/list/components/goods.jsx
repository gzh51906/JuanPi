// import {PullToRefresh, ListView, Button, Toast} from 'antd-mobile';
// import React from "react";
// import ReactDOM from "react-dom";
// import 'antd-mobile/dist/antd-mobile.css';
// import {config} from 'utils/config'


// export default class extends React.Component {
//     constructor(props) {
//         super(props);
//         const dataSource = new ListView.DataSource({
//             rowHasChanged: (row1, row2) => row1 !== row2,
//         });
//         this.state = {
//             dataSource,
//             datas:[],
//             pageIndex:1,
//             refreshing: true,
//             isLoading: true,
//             useBodyScroll: false,
//             dataBlobs: {},
//             sectionIDs:[],
//             rowIDs:[],
//             dataArr:[],//关键代码
//         };
//     }
//     genData(ref=false) {
//         //获取数据
//         let that=this;
//         let notid='';
//         fetch(config.gethonedata(1)+'?page='+(that.state.pageIndex),{
//             method:'get',
//             dataType:'json',
//         }).then(response=>response.json()).then(function (res){
//             if(parseInt(res.st)===1)
//             {
//                 const lg = res.data.length;
//                 if(lg<=0){
//                     Toast.info('没有数据了~',1);
//                     return false;
//                 }
//                 let dataArr = that.state.dataArr;//关键代码
//                 let m=that.state.datas;
//                 for (let i = 0; i < lg; i++) {
//                     //每一次读取的数据都进行保存一次
//                     dataArr.push(`row - ${(that.state.pageIndex * lg) + i}`);
//                     m.push(res.data[i])
//                 }
//                 if(ref){
//                     //这里表示刷新使用
//                     that.setState({
//                         datas:res.data,
//                         pageIndex:that.state.pageIndex+1,
//                         dataSource: that.state.dataSource.cloneWithRows(dataArr),
//                         refreshing: false,
//                         isLoading: false,
//                         //保存数据进state
//                         dataArr:dataArr
//                     });
//                 }else{
//                     //这里表示上拉加载更多
//                     that.rData = { ...that.rData, ...dataArr };
//                     that.setState({
//                         datas:m,
//                         pageIndex:that.state.pageIndex+1,
//                         dataSource: that.state.dataSource.cloneWithRows(that.rData),
//                         refreshing: false,
//                         isLoading: false,
//                         //保存数据进state
//                         dataArr:dataArr
//                     });
//                 }
//             }else {
//                 Toast.info(res.msg,1);
//             }
//         });
//     }
//     componentDidUpdate() {
//     }
 
//     componentDidMount() {
//         this.genData(true);
//     }
//     onRefresh = () => {
//         let that=this;
//         this.setState({ refreshing: true, isLoading: true,pageIndex:1 });
//         setTimeout(() => {
//             that.genData(true);
//         }, 2000);
//     };
//     onEndReached = (event) => {
//         if (this.state.isLoading && !this.state.hasMore) {
//             return;
//         }
//         this.setState({ isLoading: true,pageIndex:this.state.pageIndex+1 });
//         let that=this;
//         setTimeout(() => {
//             that.genData(false);
//         }, 1000);
//     };
//     //这下面的代码跟官网没啥区别，唯一不同的是把外部定义的数据都保存进了state
//     render() {
//         const separator = (sectionID, rowID) => (
//             <div
//                 key={`${sectionID}-${rowID}`}
//                 style={{
//                     backgroundColor: '#F5F5F9',
//                     height: 8,
//                     borderTop: '1px solid #ECECED',
//                     borderBottom: '1px solid #ECECED',
//                 }}
//             />
//         );
//         let index = this.state.datas.length - 1;
//         const row = (rowData, sectionID, rowID) => {
//             if (index < 0) {
//                 index = this.state.datas.length - 1;
//             }
//             const obj = this.state.datas[index--];
//             return (
//                 <div key={rowID}
//                      style={{
//                          padding: '0 15px',
//                          backgroundColor: 'white',
//                          height:'4rem'
//                      }}
//                 >
//                     <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
//                         {obj.title}
//                     </div>
//                     <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
//                         <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
//                         <div style={{ display: 'inline-block' }}>
//                             <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         };
//         return (<div>
//             <ListView
//                 key={this.state.useBodyScroll ? '0' : '1'}
//                 ref={el => this.lv = el}
//                 dataSource={this.state.dataSource}
//                 renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
//                     {this.state.isLoading ? 'Loading...' : 'Loaded'}
//                 </div>)}
//                 renderRow={row}
//                 renderSeparator={separator}
//                 useBodyScroll
//                 style={this.state.useBodyScroll ? {} : {
//                     border: '1px solid #ddd',
//                     margin: '5px 0',
//                 }}
//                 pullToRefresh={<PullToRefresh
//                     refreshing={this.state.refreshing}
//                     onRefresh={this.onRefresh}
//                 />}
//                 onEndReachedThreshold={1000}
//                 onEndReached={this.onEndReached}
//                 pageSize={5}
//             />
//         </div>);
//     }
// }

import React from "react";
import { ListView ,Icon } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { Row, Col } from 'antd';
import Api from '@/api';


const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Goodslist extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      data:[]
    };
  }

 async componentDidMount() {

   let {classify,id} = this.props.obj.match.params;
      let {data} = await Api.goodslist(classify,id);   
      
      this.setState({data})

  //console.log(this.state.data);
  
      
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    
      
    }, 600);
  }


  onEndReached = (event) => {

    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
  //  console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    
    }, 1000);
  }

  gogoods = (id,classify)=>{
  //  console.log(id,classify);
   // console.log(this.props);
    this.props.obj.history.push(`/goods/${classify}/${id}`)
    
  }
  render() {
      let {data} = this.state;
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
    // console.log(obj);
      
      return (
        <div key={rowID} style={{display:'inline-block',width:'48%',margin:'1px 3px' }} onClick={this.gogoods.bind(null,obj._id,obj.title)}>
       <dl style={{width:'100%'}}>
           <dt style={{ width: '100%',minHeight:'50px' }}><img style={{ width: '100%' }} src={require(`../../../../public/img/${obj.imgurl}`)} alt="" /></dt>
           <dd>
               <span style={{color:'red',fontSize:'17px',margin:'0 5px'}}>¥{obj.newprice}</span>
               <del>¥{obj.oldprice}</del>             
           </dd>
           <dd style={{marginLeft:'5px'}}>{obj.name}</dd>
       </dl>
        
       
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() =>  <Row type="flex" justify="space-around">
          <Col span={4}>推荐</Col>
          <Col span={4}>价格</Col>
          <Col span={4}>销量</Col>
          <Col span={4}>上新</Col>
          <Col span={4}>筛选</Col>
    
        </Row>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? <Icon type='loading'/> : 'Loaded'}
        </div>)}

        renderRow={row}
        className="am-list"
        pageSize={20}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}


export default Goodslist;