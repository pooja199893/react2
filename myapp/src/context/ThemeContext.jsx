
import{createContext,useReducer}from "react";

export const MyThemeContext= createContext();
const Reducer = (state , action) => {
    switch (action.type){
        case "DARK_THEME":
            return { ...state, theme: "dark" };
          case "LIGHT_THEME":
            return { ...state, theme: "light" };
          default:
            return state; 
    }
};

const InitialState ={theme : "light"}
function ThemeContextProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, InitialState);
  
    return (
      <MyThemeContext.Provider value={{ state, dispatch }}>
        {children}
      </MyThemeContext.Provider>
    );
  }
  
  export default ThemeContextProvider;