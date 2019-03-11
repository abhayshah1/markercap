import { combineReducers } from 'redux';
import { TOGGLE_COMPANY_TO_PLOT, LOAD_COMPANY_LIST } from '../actions/Action.js'

const initialState = {
    // list of companies that have been selected to be drawn
    // this should be an array of objects with the following property
    // companyList : [
    //      {code:<code>, plot:true/false}
    // ]
    companyList : [{"code":"None", "plot":false, "daterange":[], "data":[]}]
}

function companyDeviationPlot( state = initialState, action ) {
    switch ( action.type ) {
        case LOAD_COMPANY_LIST:
            return Object.assign({}, state, {companyList : action.companyList});
        case TOGGLE_COMPANY_TO_PLOT:
            return Object.assign({}, state, {companyList :
                state.companyList.map(
                    company =>
                        company.code === action.companyPlotData.id ? { ...company, plot: !company.plot, daterange:action.companyPlotData.daterange, data:action.companyPlotData.data } : company
                )}
            );    
        default:
            return state;
    }
}

export const upgradeApp = combineReducers({
    companyDeviationPlot
});