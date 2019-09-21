import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import { WhiteSpace, WingBlank } from 'antd-mobile';
let { Search } = Input;

class SearchPage extends Component {
    render() {
        return (
            <div>
                <WhiteSpace />
                    <WingBlank>
                        <Search
                            placeholder="input search text"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </WingBlank>
                <WhiteSpace/>
            </div>
        )
    }
};

export default SearchPage;