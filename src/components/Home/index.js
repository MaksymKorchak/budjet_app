import Balance from '../Balance';
import Transactions from '../Transactions';
import ErrorBoundary from '../ErrorBoundary';
import {ChangeBalance} from '../ChangeBalance';
import { Wrapper } from './styles'
import { STATUSES } from '../../constants';
import { useData } from '../../hooks';

const Home = () => {

    const { transactions, balance, hasNextPage, status, pushTransaction, onDelete, onStarClick, loadMoreRows } = useData();

    const onChange = (transaction) => {
        pushTransaction(transaction);
    }

    return (
        <ErrorBoundary>
            <Wrapper>
                <Balance balance={balance}/>
                <ChangeBalance onChange={onChange}/>
                <hr/>

                <Transactions data={transactions} 
                    isNextPageLoading={status === STATUSES.PENDING}
                    hasNextPage={hasNextPage}
                    loadMoreRows={loadMoreRows}
                    onDelete={onDelete}
                    onStarClick={onStarClick}/>
            </Wrapper>
        </ErrorBoundary>
    )
  }

  export default Home;