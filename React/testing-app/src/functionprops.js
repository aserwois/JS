import React, { Component } from "react";

function FunctionProps(props) {
    return (
        <div>
            <h1>Welcome {props.name} in {props.place}</h1>
        </div>
    )
}

export default FunctionProps;