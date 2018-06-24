import Auth from '../auth/auth';

export default Page => class DefaultPage extends React.Component {
    constructor(props) {
        super(props);
        this.auth = new Auth();
        this.state = {isAuthenticated: null, auth: this.auth};
    }

    componentDidMount() {
        this.setState({isAuthenticated: this.auth.isAuthenticated()});
    }

    render() {
        return (
            <div>
                {
                    this.state.isAuthenticated !== null ? <Page {...this.state} /> : ''
                }
            </div>
        )
    }
}