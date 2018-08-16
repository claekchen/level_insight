import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Button } from 'antd';
import { connect } from "react-redux";
import ListForLevel from './listForLevel'
import {Palette} from '../constants/app-constants'
import {pushToContainer, deleteFromContainer} from '../actions/listContainer'
import './listContainer.css';
class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.renderList = this.renderList.bind(this)
        this.handlePush = this.handlePush.bind(this) 
    }
    componentDidMount() {
        this.randomColor();
    }
    handlePush() {
      this.props.onPush('tencent')
      this.randomColor();
    }
    randomColor() {
        Palette.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
    }
    renderList() {
        const {companyArray} = this.props
        const res = []
        const uniqueColorList = Palette.slice(0)
        res.push(<ListForLevel key={companyArray[0]} company={companyArray[0]} color={uniqueColorList.pop()}/>)
        if (companyArray[1]) {
          res.push(<div className='margin'></div>)
          res.push(<ListForLevel key={companyArray[1]} company={companyArray[1]} color={uniqueColorList.pop()}/>)
        }
        return res
    }
    render() {
        const {companyArray} = this.props
        return (
            <div className='list-container'>
                <Button onClick={this.handlePush}>test</Button>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      companyArray: state.listContainer.companyArray
    };
};
const mapDispatchToProps = {
  onPush: pushToContainer,
  onDelete: deleteFromContainer
};
ListForLevel.propTypes = {
  onPush: PropTypes.func,
  onDelete: PropTypes.func,
  companyArray: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);