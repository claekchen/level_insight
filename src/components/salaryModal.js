import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import {Modal, Table} from 'antd';
import dataOfSalary from '../datas/dataOfSalary'
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
        <Table columns={columns} dataSource={props.dataSource}/>
    )
}
class SalaryModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {onClose, industry, level, company} = this.props
        const {salary, stock, bonus} = dataOfSalary[industry][company][level] ? dataOfSalary[industry][company][level] : [null, null, null]
        const dataSource = [{
            key: 0,
            salary: `￥${salary}`,
            stock: `￥${stock}`,
            bonus: `￥${bonus}`
        }]
        const totle = salary + stock + bonus
        return (
            <Modal
                title="详情"
                visible={this.props.visible}
                onCancel={onClose}
                footer={null}
                className='salary-modal'
            >
                <h5>腾讯</h5>
                <h1>T1</h1>
                <h3>
                    <span>总和：</span>
                    <span>￥{totle}</span>
                </h3>
                <AverageSalary dataSource={dataSource}/>
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