import React, { useReducer } from "react";
import { ScreenID } from "../constants";

export const GatewayContext = React.createContext();

 const initialState = {
   
    transaction_details: {
       
    },
    wallet:{
      
    },
    screen: ScreenID.WALLET,
    payrail_local_db:{}
  };
  
  function reducer(state, action) {
    switch (action.type) {
      
      case 'loading':
        return { count: state.count + 1 };
      case 'screen':
        return { ...state, screen: action.payload};
      case 'payrail_local_db':
        return { ...state, payrail_local_db:{...state.payrail_local_db, ...action.payload}};
      case 'reset':
          return { ...state, ...action.payload};
      default:
        return {...state}
    }
  }

  export default function GatewayProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    /**
     * This function update local storage state for payrail
     * @param {object} payload 
     */
    const setLocalData = (payload) => {

      try {
        localStorage.setItem('payrail_local_db', JSON.stringify({...state.payrail_local_db, ...payload}));
        dispatch({type: 'payrail_local_db', payload})
      } catch (error) {
        console.log('__Error setting payrail_local_db',error)
      }

    }
    return (
      <GatewayContext.Provider value={{ state, dispatch, setLocalData }}>
        {props.children}
      </GatewayContext.Provider>
    );
  }