import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import defaultPage from './defaultPage'

class Home extends Component {
    login = () => {
        this.props.auth.login();
    };

    logout = () => {
        this.props.auth.logout();
    };

    render() {
        const {isAuthenticated} = this.props;

        return (
            <div>
                {
                    isAuthenticated && (
                        <h4>You are logged in!</h4>
                    )
                }
                {
                    !isAuthenticated && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a onClick={this.login}>Log In</a>
                            {' '}to continue.
                        </h4>
                    )
                }
                {
                    isAuthenticated && (
                        <Button onClick={this.logout}>Log Out</Button>
                    )
                }
            </div>
        );
    }
}

export default defaultPage(Home);
