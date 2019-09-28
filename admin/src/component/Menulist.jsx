import React from 'react'
import { connect } from 'react-redux';
import {Menu,Dropdown,Icon} from 'antd'
class Menulist extends React.Component {

    constructor(){
        super();
        this.state={
            allmenu :['初级','中级','高级']
        }
        this.select= this.select.bind(this)
        
    }

    select(val){
     this.props.shezhiQuanxian(val)
        
    }
    render() {
        const menu = (
            <Menu>
                {
                    this.state.allmenu.map(item=>{
                       return <Menu.Item key={item} onClick={this.select.bind(this,item)}>
                     {item}
                 </Menu.Item >
                    })
                }
                
             
            </Menu>
        );
        return (
            <Dropdown overlay={menu}>
               <div>{this.props.quanxian} <Icon type="down" /></div>
            </Dropdown>
        )
    }
}

let mapStateToProps = function (state) {
    let { quanxian } = state.reg;
    
    return {
       quanxian
      
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
      shezhiQuanxian(quanxian){
          dispatch({type:"reg-qx",quanxian})
      }
    
    }

 
}
Menulist = connect(mapStateToProps, mapDispatchToProps)(Menulist);
export default Menulist;