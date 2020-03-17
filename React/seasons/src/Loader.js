import React from 'react';
import './Loader.css'

class Loader extends React.Component {
    static defaultProps = {
        message: 'Loading...'
    }

    render() {
        return (
            <div class="main ui segment">
                <div class="ui active inverted dimmer">
                    <div class="ui text loader">{this.props.message}</div>
                </div>
                <p></p>
            </div>
        )
    }
}

export default Loader;