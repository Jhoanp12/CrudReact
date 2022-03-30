import axios from 'axios';
import {CONSULTA_CITA_ERROR, 
    CONSULTA_CITA_SUCCESS,
    CONSULTA_VETERINARIO_ERROR,
    CONSULTA_VETERINARIO_SUCCESS} from '../types';

export function consulApiAction(){
    return async(dispatch) =>{
        try {
            const resultC = await axios.get(`http://localhost:3004/citas/miscitas`);
            if(resultC.data){
                dispatch(consultaSuccess(resultC))
                console.log(resultC)
            }
        } catch (error) {
            dispatch(consultaError(error.result))
        }
    } 
}

const consultaSuccess = (data) =>({
    type: CONSULTA_CITA_SUCCESS,
    payload: data
});

const consultaError = (error) => ({
    type: CONSULTA_CITA_ERROR,
    payload: error
});

export function consulApiActionV(){
    return async(dispatch) =>{
        try {
            const resultV = await axios.get(`http://localhost:3004/veterinarios/`);
            if(resultV.data){
                dispatch(consultaVeSuccess(resultV.data.veterinarios))
                console.log(resultV.data.veterinarios)
            }
        } catch (error) {
            dispatch(consultaVeError(error.result))
        }
    } 
}

const consultaVeSuccess = (data) =>({
    type: CONSULTA_VETERINARIO_SUCCESS,
    payload: data
});

const consultaVeError = (error) => ({
    type: CONSULTA_VETERINARIO_ERROR,
    payload: error
});
