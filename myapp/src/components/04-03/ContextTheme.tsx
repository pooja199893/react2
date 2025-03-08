import React, { useContext } from 'react'
import { MyThemeContext } from '../../context/ThemeContext';
import store from '../../redux/store';

 const ContextTheme = () => {
    const { state, dispatch } = useContext(MyThemeContext);

    function Darkmode(){
        dispatch ({type : "THEME_DARK" })
    }
    function lightmode(){
        dispatch({type : "THEME_LIGHT"})
    }
  return (
    <div>
        <h1>theme : {state. theme}</h1>
        <button onClick={Darkmode}>Dark</button>
        <button onClick={lightmode}>light</button>
    </div>
  );
};
export default ContextTheme;