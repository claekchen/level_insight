import PropTypes from 'prop-types';
import { List } from 'antd';
import React, {Component} from 'react';
import { connect } from "react-redux";
import './listForLevel.css';
import {TotalHeightOfListForLevel} from '../constants/app-constants'
import {getData} from '../actions/listForLevel';
class ListForLevel extends Component {
    constructor() {
        super();
    }
    calculateHeight(count) {
        return TotalHeightOfListForLevel/count
    }
    componentDidMount() {
        this.props.onGetData();
    }
    render() {
        const {dataSource} = this.props;
        return (
            <List       
                size="small"
                header={<div>Header</div>}
                bordered
                dataSource={dataSource}
                className='listForLevel'
                renderItem={
                    item => (
                        <List.Item 
                            style={{height: this.calculateHeight(dataSource.length)}}
                        >
                            {item.title}
                        </List.Item>
                    )
                }
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
    onGetData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForLevel);