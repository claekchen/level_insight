import PropTypes from 'prop-types';
import { List, Icon } from 'antd';
import React, {Component} from 'react';
import './listForLevel.css';
import {TotalHeightOfListForLevel, Palette} from '../constants/app-constants'
import dataOfLevel from '../datas/dataOfLevel'
function ListHeader(props) {
    return (
        <div className='title'>
            <Icon className='close' onClick={props.remove} type='close'/>
            <span>{props.title}</span>
        </div>
    )
}
class ListForLevel extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
        this.renderItem = this.renderItem.bind(this);
    }
    calculateHeight(count) {
        return TotalHeightOfListForLevel/count
    }
    componentDidMount() {
        this.getData(this.props.company);
        this.randomColor();
    }
    getData(nameOfCompany) {
        this.setState({dataSource: dataOfLevel[nameOfCompany]})
    }
    randomColor() {
        Palette.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
    }
    renderItem(item) {
        const {color} = this.props;
        const {dataSource} = this.state
        return (
            <List.Item 
            style={{height: this.calculateHeight(dataSource.length), backgroundColor: color}}
            className= 'level-name'
            >
                <p className='main-level'>{item.title}</p>
            </List.Item>
        )
    }
    render() {
        const {company, remove} = this.props;
        const {dataSource} = this.state
        return (
            <List       
                size="small"
                header={<ListHeader remove={remove} title={company}/>}
                dataSource={dataSource}
                className='listForLevel'
                renderItem={this.renderItem}
            />
        )
    }
}

ListForLevel.propTypes = {
    company: PropTypes.string,
    color: PropTypes.string,
    remove: PropTypes.func
};

ListHeader.propTypes = {
    remove: PropTypes.func
}
export default ListForLevel;