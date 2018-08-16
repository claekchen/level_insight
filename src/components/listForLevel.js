import PropTypes from 'prop-types';
import { List, Icon } from 'antd';
import React, {Component} from 'react';
import { connect } from "react-redux";
import './listForLevel.css';
import {TotalHeightOfListForLevel, Palette} from '../constants/app-constants'
import {getData} from '../actions/listForLevel';
function ListHeader(props) {
    return (
        <div className='title'>
            <Icon type='close'/>
            <span>{props.title}</span>
        </div>
    )
}
class ListForLevel extends Component {
    constructor() {
        super();
        this.renderItem = this.renderItem.bind(this);
    }
    calculateHeight(count) {
        return TotalHeightOfListForLevel/count
    }
    componentDidMount() {
        this.props.onGetData(this.props.company);
        this.randomColor();
    }
    randomColor() {
        Palette.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
    }
    renderItem(item) {
        const {dataSource, color} = this.props;
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
        const {dataSource, company} = this.props;
        return (
            <List       
                size="small"
                header={<ListHeader title={company}/>}
                dataSource={dataSource}
                className='listForLevel'
                renderItem={this.renderItem}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataSource: state.listForLevel.dataSource
    };
};
const mapDispatchToProps = {
    onGetData: getData
};
ListForLevel.propTypes = {
    dataSource: PropTypes.array,
    onGetData: PropTypes.func,
    nameOfCompany: PropTypes.string,
    company: PropTypes.string,
    color: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForLevel);