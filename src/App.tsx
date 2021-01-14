import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { SignIn } from './pages/SignIn';
import { UserPage } from './pages/User';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './store/ducks/user/actionsCreatores';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import { useHomeStyles } from './pages/theme';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
    const classes = useHomeStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const loadingStatus = useSelector(selectUserStatus);
    const isReady = loadingStatus != LoadingStatus.NEVER && loadingStatus != LoadingStatus.LOADING;

    React.useEffect(() => {
        dispatch(fetchUserData());

    }, []);

    React.useEffect(() => {

        if (!isAuth && isReady) {
            history.push('/signIn');
        } else {
            history.push('/home');
        }
    }, [isAuth, isReady]);

    if (!isReady) {
        return (
            <div className={classes.centered}>
                <TwitterIcon color="primary" style={{ width: 100, height: 100 }} />
            </div>
        )
    }

    return (
        <div className="App">
            <Switch>
                <Route path="/signin" component={SignIn} exact />
                <Layout>
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={UserPage} />
                </Layout>
            </Switch>

        </div>
    );
}

export default App;

