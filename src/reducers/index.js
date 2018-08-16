import { combineReducers } from "redux";
import listForLevel from "./listForLevel";
import listContainer from './listContainer';
const index = combineReducers(
    { listForLevel, listContainer }
);

export default index;