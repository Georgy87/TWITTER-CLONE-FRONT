import { Avatar, Tab, Tabs } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import classNames from 'classnames';
import { useHomeStyles } from '../theme';
import { selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Tweet } from '../../components/Tweet';
import { useSelector } from 'react-redux';

import "./User.scss";

export const UserPage = () => {
    const classes = useHomeStyles();
    const [activeTab, setActiveTab] = React.useState<number>(0);
    // const [userData, setUserData] = React.useState<User | undefined>();

    const tweets = useSelector(selectTweetsItems);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Paper className={classNames(classes.tweetsWrapper, 'user')} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
                <BackButton />
                <div>
                    <Typography variant="h6">Archakov Dennis</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        65 твита
                    </Typography>
                </div>
            </Paper>
            <div className="user__header"></div>
            <div className="user__info">
                <Avatar />
                <Typography>Archakov Dennis</Typography>
                <Typography>@archakov_im</Typography>
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