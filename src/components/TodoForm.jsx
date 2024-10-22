import React from "react";
import "../TodoForm.css";

export default class TodoForm extends React.Component {
    handleChange = (e) => {
        console.log(this.props);

        this.props.setUserInput(e);
    };

    handleSubmit = (e) => {
        console.log(this.props);
        e.preventDefault();
        this.props.addTask();
        // this.props.addTodo(this.state.userInput);
        // this.setState({
        //     userInput: {
        //         title: "",
        //         description: "",
        //         date: "",
        //     },
        // });
    };
    render() {
        const { title, description, date } = this.props.userInput;
        return (
            <form action="" className="form" onSubmit={this.handleSubmit}>
                <div className="form-input-wrp">
                    <input
                        type="text"
                        name="title"
                        className="form-input"
                        placeholder="Title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-input-wrp">
                    <input
                        type="text"
                        name="description"
                        className="form-input"
                        placeholder="Description"
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-input-wrp">
                    <input type="date" name="date" className="form-input" value={date} onChange={this.handleChange} />
                </div>
                <button className="btn" type="submit">
                    Add
                </button>
            </form>
        );
    }
}
