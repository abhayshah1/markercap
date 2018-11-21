/**
 * action types
 */
export const ADD_COMPANY_TO_PLOT = 'ADD_COMPANY_TO_PLOT';
export const REMOVE_COMPANY_FROM_PLOT = 'REMOVE_COMPANY_FROM_PLOT';
export const LOAD_COMPANY_LIST = 'LOAD_COMPANY_LIST';

/**
 * action creators
 */
export function addCompanyToPlot( companyCode ) {
    return { type: ADD_COMPANY_TO_PLOT, companyCode }
}

export function removeCompanyFromPlot( companyCode ) {
    return { type: REMOVE_COMPANY_FROM_PLOT, companyCode }
}

export function loadCompanyList( companyList ) {
    companyList.map( company => company.plot = false );
    return { type: LOAD_COMPANY_LIST, companyList }
}
