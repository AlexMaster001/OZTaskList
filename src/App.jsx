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
            tasksUI: {},
            tasks: {},
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
    changeStatus = (id) => {
        console.log("=");

        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, status: !task.status } : task)),
        }));
    };
    deleteTask = (id) => {
        delete this.state.tasks[id];
        this.setState((prevState) => ({
            tasks: { ...prevState.tasks, [id]: null },
            tasksUI: { ...prevState.tasksUI, [id]: null },
        }));
    };
    addTask = () => {
        const taskID = uniqueId();
        const newTask = {
            id: taskID,
            title: this.state.userInput.title,
            description: this.state.userInput.description,
            date: this.state.userInput.date,
        };
        this.setState((prevState) => ({
            tasksUI: { ...prevState.tasksUI, [taskID]: { status: false, id: taskID } },
            tasks: { [taskID]: newTask, ...prevState.tasks },
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
                <TodoList tasks={this.state.tasks} changeStatus={this.changeStatus} deleteTask={this.deleteTask} />
            </div>
        );
    }
}
