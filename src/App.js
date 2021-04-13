import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch,
} from 'react-router-dom'

import  CreateEmp  from "./Component/ListEmp/CreateEmp";
import  ListEmp  from "./Component/ListEmp";
import  Test  from "./Test/Test";
import  UpdateEmp  from "./Component/ListEmp/UpdateEmp";
import  store  from "./Store/reduxStore";
import { Provider } from 'react-redux'

function App() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <span className="h3"></span>
                </div>
            </nav>

            <Provider store={store}>
                <Router>
                    <div>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <ListEmp {...props}></ListEmp>
                            )}
                        />

                        <Route
                            path="/test"
                            exact
                            render={(props) => (
                                <Test {...props}></Test>
                            )}
                        />

                        {/* <Route
                            path="/update_emp"
                            render={(props) => (
                                <UpdateEmp
                                    {...props}
                                ></UpdateEmp>
                            )}
                        /> */}

                      

                    </div>
                </Router>
            </Provider>
        </div>
    )
}

export default App