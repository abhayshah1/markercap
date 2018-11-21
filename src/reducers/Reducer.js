import { combineReducers } from 'redux';
import { ADD_COMPANY_TO_PLOT, REMOVE_COMPANY_FROM_PLOT } from '../actions/Action.js'

const initialState = {
    // list of companies that have been selected to be drawn
    // this should be an array of objects with the following property
    // {companyCode:<code>, plot:true/false}
    companyList : []
}

function companyDeviationPlot( state = initialState, action ) {
    switch ( action.type ) {
        case ADD_COMPANY_TO_PLOT:
        case REMOVE_COMPANY_TO_PLOT:
            // return Object.assign( {}, state, {
            //     companyList : [
            //         ...state.companyList, action.companyId
            //     ]
            // })
            return state.companyList.map(
                company =>
                    company.companyCode === action.companyCode ? { ...company, plot: !company.plot } : company
            )
        default:
            return state;
    }
}

function initializeCompanyList( state = initialState, action ) {
    return Object.assign({}, state, {companyList : action.companyList});
}

const upgradeApp = combineReducers({
    initializeCompanyList, 
    companyDeviationPlot
});

export default upgradeApp;