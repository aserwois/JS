import React, { Component } from 'react'

class PropTest extends Component {
    render() {
        const {name, place, children} = this.props;
        return (
            <div>
                <h1>Hello {name} from {place} Welcome to Simplilearn!</h1>
                {children}
            </div>
        )
    }
}

export default PropTest;