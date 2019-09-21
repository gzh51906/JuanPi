import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Icon } from 'antd';
class Search extends Component{

    render() {
        return (
            <div className='search' style={{overflow:'hidden'}}>
                <SearchBar
                    style={{ width: '85%',float:'left'}}
                    placeholder="搜索"
                    maxLength={8}
                    cancelText=''
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => {
                        // console.log(this.props);
                        this.props.history.push('/searchPage');
                    }}
                />
                <Icon
                    type = 'pic-left'
                    style={{ float: 'left', fontSize: '30px', marginTop: 8,marginLeft: 12 }}
                    onClick={() => {
                        console.log(this.props);
                        this.props.history.push('/list')
                    }}
                />
                < WingBlank />
            </div>
        )
    }
};
Search = withRouter(Search);
export default Search;