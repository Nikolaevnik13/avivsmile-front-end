import {
    CHANGE_FLAG_LOGIN,
    FETCH_ALL_RECORDS,
    REMOVE_DATE_FOR_REQUEST_TABLE,
    REMOVE_USERS_FROM_STORE,
    SAVE_DATE_FOR_REQUEST_TABLE, SAVE_NUM_WORK_DAY, SAVE_OVERTIME_HOURS, SAVE_RECORDS_TO_ARRAY,
    SAVE_USERS_TO_STORE, SAVE_WORK_HOURS,
    VIEW_PAGE,
    VIEW_PAGE_SUB_ADMIN,
    VIEW_PAGE_TABLES_SWITCH
} from "../actions/appAction";
import {act} from "@testing-library/react";


const initialState = {
    page: "",
    pageAdmin: "",
    pageTableSwitch: "",
    flagLogin: null,
    employees: [],
    dataForRequest: {},
    workDays: 0,
    workHours: 0,
    overtimeHours: 0,
    arrayRecords: []
    // ,
    // allUsersDB:[]
};


export const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case VIEW_PAGE:
            return {...state, page: action.payload};

        case SAVE_USERS_TO_STORE:

            return {...state, employees: action.payload}

        case VIEW_PAGE_SUB_ADMIN:
            return {...state, pageAdmin: action.payload}

        case CHANGE_FLAG_LOGIN:
            return {...state, flagLogin: action.payload}

        case REMOVE_USERS_FROM_STORE:
            return {...state, employees: []}

        case VIEW_PAGE_TABLES_SWITCH:
            return {...state, pageTableSwitch: action.payload}

        case SAVE_DATE_FOR_REQUEST_TABLE:
            return {...state, dataForRequest: action.payload}

        case REMOVE_DATE_FOR_REQUEST_TABLE:
            return {...state, dataForRequest: {}}

        case SAVE_NUM_WORK_DAY:
            return {...state, workDays: action.payload}

        case SAVE_WORK_HOURS:
            return {...state, workHours: action.payload}

        case SAVE_OVERTIME_HOURS:
            return {...state, overtimeHours: action.payload}

        case SAVE_RECORDS_TO_ARRAY:
            return {...state, arrayRecords: action.payload}


        default:
            return state;
    }

};