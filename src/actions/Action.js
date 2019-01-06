/**
 * action types
 */
export const TOGGLE_COMPANY_TO_PLOT = 'TOGGLE_COMPANY_TO_PLOT';
export const LOAD_COMPANY_LIST = 'LOAD_COMPANY_LIST';

/**
 * action creators
 */
export function toggleCompanyToPlot( companyCode ) {
    return { type: TOGGLE_COMPANY_TO_PLOT, companyCode }
}

export function loadCompanyList( companyList ) {
    companyList.map( company => Object.assign(company, company.plot = false ));
    return { type: LOAD_COMPANY_LIST, companyList }
}
