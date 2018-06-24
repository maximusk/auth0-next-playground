import React, { Component } from 'react';
import defaultPage from './defaultPage'

class Callback extends Component {
    componentDidMount() {
        this.props.auth.handleAuthentication();
    }

    render() {
        return (
            <div>
                Loading...
            </div>
        );
    }
}

export default defaultPage(Callback);