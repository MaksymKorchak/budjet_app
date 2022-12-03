import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';
import { AppContext } from '../../providers/context';
import { Wrapper, TransactionDate, Value, Comment, Icon } from './styles';
import Star from '../../assests/img/star.svg';
import GoldStart from '../../assests/img/gold_star.svg';
import { FormattedMessage } from 'react-intl';

const Transaction = ({ transaction: {value, date, comment, id, isStarred}, onDelete, onStarClick }) => {

    const {state} = useContext(AppContext);

    const deleteItem = useCallback(() => onDelete(id), [id])

    return (
        <Wrapper value={value}>
            <Icon 
                onClick = {() => onStarClick(id)}
                src={isStarred ? GoldStart : Star}/>
            <TransactionDate>{date}</TransactionDate>
            <Value>{value.toFixed(2)}, {state.currency}</Value>
            <Comment>{comment}</Comment>
            <button onClick={deleteItem}>
                <FormattedMessage id="delete"/>
            </button>
        </Wrapper>
    )
};

Transaction.propTypes = {
    onDelete: PropTypes.func,
    onStarClick: PropTypes.func,
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}

export default Transaction