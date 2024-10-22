import { useState } from "react";
import React from "react";

import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import { uniqueId } from "lodash";

// import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            userInput: {
                title: "",
                description: "",
                date: "",
            },
        };
    }

    setUserInput = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            userInput: { ...prevState.userInput, [name]: value },
        }));
    };
    addTask = () => {
        console.log("yes");

        const newTask = {
            id: uniqueId(),
            title: this.state.userInput.title,
            description: this.state.userInput.description,
            date: this.state.userInput.date,
            status: false,
        };
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, newTask],
            userInput: {
                title: "",
                description: "",
                date: "",
            },
        }));
    };
    render() {
        return (
            <div className="form-wrp">
                <TodoForm userInput={this.state.userInput} setUserInput={this.setUserInput} addTask={this.addTask} />
                <TodoList />
            </div>
        );
    }
}
