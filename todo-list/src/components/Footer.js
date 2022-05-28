import React from "react";

export default function Footer(props) {
    const { count } = props;
    return (
        <div className="footer">
            <div className="footer__count">{ count } items left</div>
        </div>
    );
}