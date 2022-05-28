import React from "react";
import AddTodoInput from "./AddTodoInput";

export default function Header(props) {
    const { title } = props;
    return (
        <header>
            <h1 className="header">{ title }</h1>
            <AddTodoInput />
        </header>
    );
}