import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="title">Hello world!</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="todo-item-check-1" />
                                    <label className="form-check-label" htmlFor="todo-item-check-1">Take out the trash</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="todo-item-check-2" />
                                    <label className="form-check-label" htmlFor="todo-item-check-2">Buy bread</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="todo-item-check-3" />
                                    <label className="form-check-label" htmlFor="todo-item-check-3">Teach penguins to fly</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;