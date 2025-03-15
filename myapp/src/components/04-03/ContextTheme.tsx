import React, { useContext } from 'react'
import { MyThemeContext } from '../../context/ThemeContext';
import store from '../../redux/store';

 const ContextTheme = () => {
    const { state, dispatch } = useContext(MyThemeContext);

    const ChangeTheme = () => {
      if (state.theme == "light") {
        dispatch({ type: "DARK_THEME" });
      } else {
        dispatch({ type: "LIGHT_THEME" });
      }
    };
  return (
    <div>
        <h1>THEME : {state. theme}</h1>
        <h2 style={{ 
          backgroundColor: state.theme == "light" ? "white" : "black",
          color: state.theme == "light" ? "black" : "white",
        }}
      >MODE</h2>
        <button onClick={ChangeTheme}>CHANGE THEME</button>
    </div>
  );
};
export default ContextTheme;