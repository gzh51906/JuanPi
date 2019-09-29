import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { log } from '../../node_modules/util';
import  Listmodule from './Listmodule'
class Addfenlei extends Component {


    render() {
        return <div style={{ padding: "10px" }}>
            <div>分类管理 / 添加分类</div>
            <div style={{ marginTop: "20px" }}>
                <WrapListForm></WrapListForm>
            </div>
        </div>
    }
}
const WrapListForm = Form.create({ name: 'addfenlei' })(Listmodule);
export default Addfenlei;