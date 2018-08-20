import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import ListForLevel from './listForLevel'
import ButtonContainer from './buttonContainer'
import IndustrySelect from './industrySelect'
import SalaryModal from './salaryModal'
import {Palette} from '../constants/app-constants'
import {pushToContainer, deleteFromContainer, selectIndustry} from '../actions/listContainer'
import './listContainer.css';
class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.renderList = this.renderList.bind(this)
    }
    componentDidMount() {
        this.randomColor();
    }
    randomColor() {
        Palette.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
    }
    renderList() {
        const {companyArray, onDelete, industry} = this.props
        const res = []
        const uniqueColorList = Palette.slice(0)
        res.push(
            <ListForLevel 
                remove={() => onDelete(companyArray[0])} 
                key={companyArray[0]} 
                company={companyArray[0]} 
                industry={industry} 
                color={uniqueColorList.pop()}
            />
        )
        if (companyArray[1]) {
            res.push(<div key='margin' className='margin'></div>)
            res.push(
                <ListForLevel 
                    remove={() => onDelete(companyArray[1])} 
                    key={companyArray[1]} 
                    company={companyArray[1]} 
                    industry={industry} 
                    color={uniqueColorList.pop()}
                />
            )
        }
        return res
    }
    render() {
        const {onPush, industry, onSelectIndustry} = this.props
        return (
            <div className='list-container'>
                <IndustrySelect handleChange={onSelectIndustry}/>
                <ButtonContainer industry={industry} onPush={onPush} randomColor={this.randomColor}/>
                <div className='list-row'>
                    {this.renderList()}
                </div>
                <SalaryModal />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyArray: state.listContainer.companyArray,
        industry: state.listContainer.industry
    };
};
const mapDispatchToProps = {
    onPush: pushToContainer,
    onDelete: deleteFromContainer,
    onSelectIndustry: selectIndustry
};
ListForLevel.propTypes = {
    onPush: PropTypes.func,
    onDelete: PropTypes.func,
    onSelectIndustry: PropTypes.func,
    companyArray: PropTypes.array,
    industry: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);