
import { FormattedMessage } from "react-intl";

const Balance = ({ balance }) => {
    return (
        <div>
            <strong>
                <FormattedMessage id="current_balance"/> {balance}
            </strong>
        </div>
    )
}

export default Balance;
