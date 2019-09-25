import { Button, Input } from 'antd';
import React from 'react'
class Listmodule extends React.Component {

  constructor() {
    super();
    this.state = {
      show: "none"
    }

    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    let { show } = this.props
    console.log('this.',this.props);
    
    this.setState({
      show: show
    })
  }

  handleOk() {
    // console.log(e);
    this.setState({
      show: "none",
    });
  };

  handleCancel() {
    // console.log(e);
    this.setState({
      show: "none",
    });
  };

  render() {
    return (
      <div style={{ boxShadow: "1px" ,display:this.state.show}}>
        <div>编辑商品</div>
        <div>
          1111
            <>
            <Button>确定</Button>
            <Button>取消</Button>
          </>

        </div>
      </div>
    )
  }

}

export default Listmodule;