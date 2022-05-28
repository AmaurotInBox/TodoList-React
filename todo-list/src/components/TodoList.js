import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    const { title, items } = props;
    const count = items.length;
    
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
            <Footer count={count}/>
        </div>
    );
}