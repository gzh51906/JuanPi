

import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { log } from '../../node_modules/util';
import  Usermodule from './Usermodule'
import Menulist from './Menulist'
class Adduser extends Component {


    render() {
        return <div style={{ padding: "10px" }}>
            <div>用户管理 / 添加用户</div>
            <div style={{ marginTop: "20px" }}>
                <Menulist/>
                <WrapUserForm></WrapUserForm>
            </div>
        </div>
    }
}
const WrapUserForm = Form.create({ name: 'adduser' })(Usermodule);
export default  Adduser;