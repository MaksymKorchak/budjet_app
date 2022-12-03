import { useContext, useMemo, useState } from "react";
import { AppContext } from "../../providers/context";
import { useBooleanToggle } from "../../hooks";
import { LOCALES } from "../../providers/i18n";
import { FormattedMessage } from "react-intl";
import { saveToStorage } from "../../utils/sessionStorage";

const Settings = () => {

    const {state, dispatch} = useContext(AppContext);
    const {status, handleStatus} = useBooleanToggle(false);

    const onChangeCurrency = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'changeCurrency',
            currency: value
        })
    };

    const onChangeLocale = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'setLocale',
            locale: value
        })
        saveToStorage('locale', value);
    };    

    const data = useMemo(() => 'Hello') ;

    return (
        <>
            <div>
                <form>
                    <h2>
                        <FormattedMessage id="currency_ssettings"/>
                    </h2>
                    <div>
                        <label>
                            <FormattedMessage id="currency"/> 
                            <select 
                                onChange = {onChangeCurrency}
                                name="currency" 
                                value={state.currency}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="UAH">UAH</option>
                            </select>
                        </label>
                    </div>
                    <h2>
                        <FormattedMessage id="language_ssettings"/>
                    </h2>
                    <div>
                        <label>
                            <FormattedMessage id="language"/> 
                            <select 
                                onChange = {onChangeLocale}
                                name="locale" 
                                value={state.locale}>
                                <option value={LOCALES.UKRAINIAN}>UKR</option>
                                <option value={LOCALES.ENGLISH}>ENG</option>
                            </select>
                        </label>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={handleStatus}>
                    <FormattedMessage id="advanced_ssettings"/>
                </button>
                {status ? (
                    <div>
                        <h2>
                            <FormattedMessage id="advanced_ssettings"/>
                        </h2>
                        <p>...</p>
                    </div>
                ) : null }

            </div>
       </>
    )
};

export default Settings; 