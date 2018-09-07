import PropTypes from "prop-types";
import React, { Component } from "react";
import { Select } from "antd";
import dataOfLevel from "../datas/dataOfLevel";
import "./industrySelect.css";
const Option = Select.Option;
class IndustrySelect extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    let res = Object.keys(dataOfLevel).map(key => {
      return (
        <Option key={key} value={key}>
          {dataOfLevel[key]["name"]}
        </Option>
      );
    });
    return res;
  }
  render() {
    const { handleChange } = this.props;
    return (
      <div className="industry-select">
        <Select defaultValue="SE" className="select" onChange={handleChange}>
          {this.renderList()}
        </Select>
      </div>
    );
  }
}

IndustrySelect.propTypes = {
  onPush: PropTypes.func,
  randomColor: PropTypes.func,
  industry: PropTypes.string
};

export default IndustrySelect;
