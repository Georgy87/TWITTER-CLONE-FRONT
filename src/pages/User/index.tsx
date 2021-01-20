import { Avatar, Tab, Tabs } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import classNames from 'classnames';
import { useHomeStyles } from '../theme';
import { selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Tweet } from '../../components/Tweet';
import { useDispatch, useSelector } from 'react-redux';

import "./User.scss";
import { fetchTweets } from '../../store/ducks/tweets/actionsCreatores';
import { AuthApi } from '../../services/api/authApi';
import { setUserData } from '../../store/ducks/user/actionsCreatores';
import { User } from '../../store/ducks/user/contracts/state';

export const UserPage = () => {
    const classes = useHomeStyles();
    const [activeTab, setActiveTab] = React.useState<number>(0);
    const dispatch = useDispatch();
    const [userData, setUserData] = React.useState<User | undefined>();
    console.log(userData);
    const tweets = useSelector(selectTweetsItems);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

    React.useEffect(() => {
        const userId = window.location.pathname.split('/').pop();
        dispatch(fetchTweets());
        if (userId) {
          AuthApi.getUserInfo(userId).then(({ data }) => {
            setUserData(data);
          });
        }
    }, [dispatch]);


    return (
        <Paper className={classNames(classes.tweetsWrapper, 'user')} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
                <BackButton />
                <div>
                    <Typography variant="h6">Archakov Dennis</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {tweets.length} твита
                    </Typography>
                </div>
            </Paper>
            <div className="user__header"></div>
            <div className="user__info">
                <Avatar />
                <Typography>{userData?.fullname}</Typography>
                <Typography>@{userData?.username}</Typography>
                <Typography>Frontend Developer / UI Designer</Typography>
                <ul className="user__info-details">
                    <li>Nazran, Ingushetia</li>
                    <li>
                        <a className="link" href="https://archakov.im">
                            archakov.im
                        </a>
                    </li>
                    <li>
                        <br />
                    </li>
                    <li>Дата рождения: 24 октября 1995 г.</li>
                    <li>Регистрация: ноябрь 2016 г.</li>

                </ul>
            </div>
            <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                <Tab label="Твиты" />
                <Tab label="Твиты и ответы" />
                <Tab label="Медиа" />
                <Tab label="Нравится" />
            </Tabs>
            <div className="user__tweets">
            {
                tweets.map((tweet: any) => (
                    <Tweet id={tweet._id} key={tweet._id} {...tweet} images={tweet.images} classes={classes} />
                ))
            }
            </div>
        </Paper>
    );
};