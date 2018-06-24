import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import defaultPage from './defaultPage'
import Router from 'next/router'

class App extends Component {
    goToHome() {
        Router.push('/home')
    }

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
                <h3>Auth0 - Nextjs</h3>
                <Button onClick={this.goToHome}>Home</Button>
                {
                    !isAuthenticated && (
                        <Button onClick={this.login}>Log In</Button>
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

export default defaultPage(App);
