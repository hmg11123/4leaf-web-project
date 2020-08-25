import React from "react";
import { Route } from 'react-router-dom';
import { Header, Footer, Content } from "./components/layout"

class App extends React.Component {
    render() {
        return (
            <div className="app">

                <header>
                    <div className="header">
                        <Route exact path="/" component={Header} />
                    </div>
                </header>
                <main>
                    <div className="Content">
                        <Route exact path="/" component={Content} />
                    </div>
                </main>
                <footer>
                    <div className="footer">
                        <Route exact path="/" component={Footer} />
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;