import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import {Modal} from 'antd';
import dataOfLevel from '../datas/dataOfLevel'
import {toggleSalaryModal} from '../actions/listContainer'
import './salaryModal.css';
class SalaryModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {onClose} = this.props
        return (
            <div className='salary-modal'>
                <Modal
                    title="Modal"
                    visible={this.props.visible}
                    onCancel={onClose}
                    footer={null}
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
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