import React, { useReducer } from "react";
import { ScreenID } from "../constants";

export const GatewayContext = React.createContext();

 const initialState = {
   
    transaction_details: {
       
    },
    wallet:{
      
    },
    screen: ScreenID.WALLET
  };
  
  function reducer(state, action) {
    switch (action.type) {
      
      case 'loading':
        return { count: state.count + 1 };
      case 'screen':
        return { ...state, screen: action.payload};
      case 'reset':
        return { ...state, ...action.payload};
      default:
        return {...state}
    }
  }

  export default function GatewayProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <GatewayContext.Provider value={{ state, dispatch }}>
        {props.children}
      </GatewayContext.Provider>
    );
  }