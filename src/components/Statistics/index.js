import { FormattedMessage } from "react-intl";
import { useState } from "react";
import withProfiler from "../HOCs/withProfiler";

const list = new Array(20).fill(0).map(() => `Item ${Math.random()}`);

const List = ({list}) => {
    const [filter,setFilter] = useState('');
    const filteredList = list.filter((item) => item.includes(filter));

    return (
        <>
             <input type="text" onChange={(e) => setFilter(e.target.value)}/>
            <ul>
                {filteredList.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
};

const Clicker = ({children}) => {
    const [n, setN] = useState(0);

    return (
        <div data-count={n}>
            {children}
            <p>Clicked {n} times</p>
            <button onClick={() => setN(n + 1)}>Click (+1)</button>
        </div>
    )
}
const Statistics = () => {

    return (
        <div>
            <h1>
                <FormattedMessage id="statistics_page"/>
            </h1>
           
            <Clicker>
                <List list={list}/>
            </Clicker>
        </div>
    )
};

export default withProfiler(Statistics, 'Statistics');