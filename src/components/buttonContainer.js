import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';
import {AllCompanyKey, AllCompanyName,  MaxCountOfCompanyButton} from '../constants/app-constants';
import './buttonContainer.css';

class ButtonContianer extends Component {
    constructor(props) {
        super(props)
        this.renderList = this.renderList.bind(this)
    }
    handlePush() {
        this.props.onPush('tencent')
        this.randomColor();
    }
    renderList() {
        const {industry} = this.props
        let res = []
        let resInDropDown = []
        res = AllCompanyKey[industry].map((item, index) => {
            if (index+1 > MaxCountOfCompanyButton) {
                resInDropDown.push(
                    <Menu.Item 
                        onClick={() => {this.props.onPush(item);this.props.randomColor()}} 
                        className='menu-company' 
                        key={item}
                    >
                        {AllCompanyName[industry][item]}
                    </Menu.Item>)
            }
            return index < MaxCountOfCompanyButton ? (
                <Button 
                    onClick={() => {this.props.onPush(item);this.props.randomColor()}}
                    className='button-company'
                    key={index}
                >
                    {AllCompanyName[industry][item]}
                </Button>
            ) : null
        })
        const menu = (
            <Menu>
                {resInDropDown}
            </Menu>
        );
        if (AllCompanyKey[industry].length > MaxCountOfCompanyButton) {
            res.push(
                <Dropdown key='more_button' overlay={menu}>
                    <Button>
                        更多 <Icon type="down" />
                    </Button>
                </Dropdown>
            )
        }
        return res
    }
    render() {
        return (
            <div className='button-container'>
                {this.renderList()}
            </div>
        )
    }
}

ButtonContianer.propTypes = {
    onPush: PropTypes.func,
    randomColor: PropTypes.func,
    industry: PropTypes.string
};

export default ButtonContianer;