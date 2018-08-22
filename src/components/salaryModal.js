import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import {Modal, Table} from 'antd';
import dataOfSalary from '../datas/dataOfSalary'
import dataOfLevel from '../datas/dataOfLevel'
import {toggleSalaryModal} from '../actions/listContainer'
import './salaryModal.css';

const columns = [
    {
        title: '薪资/年',
        dataIndex: 'salary',
        key: 'salary',
    }, 
    {
        title: '股票/年',
        dataIndex: 'stock',
        key: 'stock',
    }, 
    {
        title: '奖金/年',
        dataIndex: 'bonus',
        key: 'bonus',
    }
]
function AverageSalary(props) {
    return (
        <Table columns={columns} dataSource={props.dataSource} pagination={false}/>
    )
}
function NoDataPlaceholde(prop) {
    return <h3>抱歉，我们暂时还没有相关的薪资数据。</h3>
}

function SalaryDataContainer(props) {
    return (
        <Fragment>
            <h3>
                <span>总和：</span>
                <span>￥{props.total}/年</span>
            </h3>
            <p>{props.comment !== null ? props.comment : ""}</p>
            <AverageSalary dataSource={props.dataSource}/>
        </Fragment>
    )
}
class SalaryModal extends Component {
    constructor(props) {
        super(props)
    }
    checkHasData(salary) {
        return salary === null ? false : true;
    }
    render() {
        const {onClose, industry, level, company} = this.props
        if (level === null)
            return null
        const {salary, stock, bonus} = dataOfSalary[industry][company][level] ? dataOfSalary[industry][company][level] : [null, null, null]
        let dataSource
        if (this.checkHasData(salary)) {
            dataSource = [{
                key: 0,
                salary: `￥${salary}`,
                stock: `￥${stock}`,
                bonus: `￥${bonus}`
            }]
        } else {
            dataSource = []
        }
        const total = salary + stock + bonus
        return (
            <Modal
                title="薪资数据"
                visible={this.props.visible}
                onCancel={onClose}
                footer={null}
                className='salary-modal'
            >
                <h5>{dataOfLevel[industry]['company'][company]['name']}</h5>
                <h1>{level}</h1>
                {
                    this.checkHasData(salary) 
                        ? <SalaryDataContainer dataSource={dataSource} total={total} comment={dataOfSalary[industry][company].comment}/>
                        : <NoDataPlaceholde />
                }
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        industry: state.listContainer.industry,
        visible: state.listContainer.salaryVisible,
        company: state.listContainer.companySelected,
        level: state.listContainer.levelSelected
    };
};
const mapDispatchToProps = {
    onClose: toggleSalaryModal
};

SalaryModal.propTypes = {
    visible: PropTypes.bool,
    industry: PropTypes.string,
    company: PropTypes.string,
    onClose: PropTypes.func,
    level: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryModal);