import PropTypes from 'prop-types';
import { List, Icon } from 'antd';
import React, {Component} from 'react';
import { connect } from "react-redux";
import './listForLevel.css';
import {TotalHeightOfListForLevel, Palette} from '../constants/app-constants'
import {toggleSalaryModal} from '../actions/listContainer'
import dataOfLevel from '../datas/dataOfLevel'
function ListHeader(props) {
    return (
        <div className='title'>
            <Icon className='close' onClick={props.remove} type='close'/>
            <span>{dataOfLevel[props.industry]['company'][props.title]['name']}</span>
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
        this.getData = this.getData.bind(this)
    }
    calculateHeight(count) {
        return TotalHeightOfListForLevel/count
    }
    componentDidMount() {
        this.getData();
        this.randomColor();
    }
    getData() {
        const {industry, company} = this.props
        this.setState({dataSource: dataOfLevel[industry]['company'][company]['level']})
    }
    randomColor() {
        Palette.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
    }
    renderItem(item) {
        const {color, onClick} = this.props;
        const {dataSource} = this.state
        return (
            <List.Item 
            style={{height: this.calculateHeight(dataSource.length), backgroundColor: color}}
            onClick={onClick}
            className= 'level-name'
            >
                <p className='main-level'>{item.title}</p>
            </List.Item>
        )
    }
    render() {
        const {company, remove, industry} = this.props;
        const {dataSource} = this.state
        return (
            <List       
                size="small"
                header={<ListHeader industry={industry} remove={remove} title={company}/>}
                dataSource={dataSource}
                className='listForLevel'
                renderItem={this.renderItem}
            />
        )
    }
}

const mapStateToProps = () => {
    return {
    };
};
const mapDispatchToProps = {
    onClick: toggleSalaryModal
};

ListForLevel.propTypes = {
    company: PropTypes.string,
    color: PropTypes.string,
    remove: PropTypes.func,
    industry: PropTypes.string,
    onClick: PropTypes.func
};

ListHeader.propTypes = {
    remove: PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(ListForLevel);