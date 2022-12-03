import React, {useContext} from "react";
import { AppContext } from "../../providers/context";
import { THEMES } from "../../providers/themes/themeList";
import { saveToStorage } from "../../utils/sessionStorage";
import { FormattedMessage } from "react-intl";

export const ThemeSwitch = () => {
    const {state, dispatch} = useContext(AppContext);

    const setTheme = (themeName) => {
        dispatch({
            type: 'setTheme',
            themeName
        });
        saveToStorage('themeName', themeName)
    }

    return (
        <div>
            <button onClick={() => setTheme(THEMES.LIGHT)}>
                <FormattedMessage id="themes.light"/>
            </button>
            <span>|</span>
            <button onClick = {() => setTheme(THEMES.DARK)}>
            <FormattedMessage id="themes.dark"/>
            </button>
        </div>
    )
}