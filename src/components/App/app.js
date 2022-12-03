import React, {Suspense, lazy} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { open } from '../../utils/indexdb';
import Home from '../Home';
import About from '../About';
import Header from '../Header';
import Settings from '../Settings';
import { Wrapper, GlobalStyle } from './styles';
import { FormattedMessage } from 'react-intl';

const Statistics = lazy(() => import('../Settings'));

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    };

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch(() => {
            console.error('Error')
        });
    };

    render() {
        
        if (this.state.loading) {
            return <div><FormattedMessage id="loading_text"/></div>
        };

        return (
            <Router>
                <Wrapper>
                    <GlobalStyle/>
                    <Header/>
                    <Suspense fallback={<div><FormattedMessage id="loading_text"/></div>}>
                        <Routes>
                            <Route exec path="/about" element={<About/>}/>
                            <Route exec path="/statistics" element={<Statistics />}/>
                            <Route exec path="/settings" element={<Settings />}/>
                            <Route exec path="/" element={<Home />}/>
                        </Routes>
                    </Suspense>
                </Wrapper>
            </Router>
        )
    }
    
};

export default App;