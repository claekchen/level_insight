import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import {Modal, Table} from 'antd';
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
        title: '奖金',
        dataIndex: 'bonus',
        key: 'bonus',
    }
]
function AverageSalary(props) {
    return (
        <Table columns={columns}/>
    )
}
class SalaryModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {onClose} = this.props
        return (
            <div className='salary-modal'>
                <Modal
                    title="详情"
                    visible={this.props.visible}
                    onCancel={onClose}
                    footer={null}
                >
                    <h2>腾讯</h2>
                    <p>T1</p>
                    <p>
                        <span>总和：</span>
                        <span>10000</span>
                    </p>
                    <AverageSalary />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        industry: state.listContainer.industry,
        visible: state.listContainer.salaryVisible
    };
};
const mapDispatchToProps = {
    onClose: toggleSalaryModal
};

SalaryModal.propTypes = {
    visible: PropTypes.bool,
    industry: PropTypes.string,
    onClose: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryModal);