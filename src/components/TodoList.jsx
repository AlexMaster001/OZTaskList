import React from "react";
import cn from "classnames";
import "../todoList.css";

export default class TodoList extends React.Component {
    renderClasses(task) {
        return cn("todoList-item", { done: task.status });
    }
    renderTasks() {
        const { tasks, tasksUI } = this.props;
        const readyTasks = [];
        for (let task of this.props.tasks) {
            readyTasks.push(
                <div className={this.renderClasses(tasksUI[task.id])} key={task.id}>
                    <input
                        type="checkbox"
                        className="todoList-item-status"
                        checked={tasksUI[task.id].status}
                        onChange={() => {
                            this.props.changeStatus(task.id);
                        }}
                    />
                    <div className="todoList-item-title">{task.title}</div>
                    <div className="todoList-item-description">{task.description}</div>
                    <div className="todoList-item-date">{task.date}</div>
                    {task.status ? (
                        <button
                            className="btn"
                            onClick={() => {
                                this.props.deleteTask(task.id);
                            }}
                        >
                            Delete
                        </button>
                    ) : null}
                </div>
            );
        }
        return readyTasks;
    }
    render() {
        const { tasks } = this.props;

        return <div className="todoList">{this.renderTasks()}</div>;
    }
}
