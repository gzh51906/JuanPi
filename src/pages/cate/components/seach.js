import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Icon } from 'antd';
class Search extends Component{

    render() {
        return (
            <div className='search' style={{overflow:'hidden'}}>
                <SearchBar 
                    style = {
                        {
                            width: '90%',
                            background: '#fff',
                            border: '1px solid #d9d9d9',
                            boxShadow:'1px 1px 3px 0px #d9d9d9',
                            height: '30px',
                            borderRadius:'3px',
                            margin: '10px 15px 0px',
                           textAlign:'right'
                        }
                    }
                    placeholder="搜索商品"
                    maxLength={8}
                    cancelText=''
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => {
                        // console.log(this.props);
                        this.props.history.push('/searchPage');
                    }}
                />
               
                < WingBlank />
            </div>
        )
    }
};
Search = withRouter(Search);
export default Search;