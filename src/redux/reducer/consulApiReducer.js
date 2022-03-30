import {CONSULTA_CITA_ERROR, CONSULTA_CITA_SUCCESS, 
CONSULTA_VETERINARIO_ERROR, CONSULTA_VETERINARIO_SUCCESS} from '../types';

const initialState = {
    resultC: [],
    resultV: []
}

export default function consulApiReducer (state = initialState, action){
    switch (action.type) {
        case CONSULTA_CITA_SUCCESS:
            return{
                ...state, resultC: action.payload
            }
        case CONSULTA_CITA_ERROR:
            return {
                ...state, error: action.payload.error, resultC: []
            }
        case CONSULTA_VETERINARIO_SUCCESS:
            return {
                ...state, resultV: action.payload
            }
        case CONSULTA_VETERINARIO_ERROR:
            return {
                ...state, error: action.payload.error, resultV: []
            }
        default:
            return state
    }
}