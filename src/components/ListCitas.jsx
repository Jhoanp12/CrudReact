import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {consulApiAction} from '../redux/action/consulApiAction'
import { CONSULTA_VETERINARIO_ERROR } from '../redux/types';


const ListCitas = () => {
  
  let dispatch = useDispatch();

  const { resultC } = useSelector((state) => state.info);
  
  useEffect( () => {
    dispatch(consulApiAction())
  },[])

  return (
    <>
      

    </>
  )
}

export default ListCitas