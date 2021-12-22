import { COURSEDATA } from "../shared/CourseData";
import { QUOTELIST } from "../shared/QuoteList";
import { PORTFOLIODATA } from "../shared/PortfolioData"

export const initialState = {
    CourseData: COURSEDATA,
    QuoteList: QUOTELIST,
    PortfolioData: PORTFOLIODATA
}

export const Reducer = (state = initialState, action) => {
    return state;
}