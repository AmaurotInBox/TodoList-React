import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    const { title, items } = props;
    return (
        <div className="col-12">
            <Header title={title} />
            <ul className="list-group list-group-flush">
                {items.map(item => {
                    return (
                        <TodoItem key={item.id} data={item}/>
                    );
                })}
            </ul >
        </div>
    );
}