/**
 * action types
 */
export const DISPLAY_COMPANY_TO_PLOT = 'DISPLAY_COMPANY_TO_PLOT';
export const REMOVE_COMPANY_FROM_PLOT = 'REMOVE_COMPANY_FROM_PLOT';
export const LOAD_COMPANY_LIST = 'LOAD_COMPANY_LIST';

/**
 * action creators
 */
export function displayCompanyToPlot( companyPlotData ) {
    return { type: DISPLAY_COMPANY_TO_PLOT, companyPlotData }
}

export function removeCompanyFromPlot( companyID ) {
    return { type: REMOVE_COMPANY_FROM_PLOT, companyID }
}

export function loadCompanyList( companyList ) {
    companyList.map( company => Object.assign(company, company.plot = false ));
    return { type: LOAD_COMPANY_LIST, companyList }
}
