import React from 'react';
import { Paper, Typography} from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';


import { AddTweetForm } from '../../components/AddTweetForm';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { useHomeStyles } from '../theme';
import { SearchTextField } from '../../components/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionsCreatores';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { fetchTags } from '../../store/ducks/tags/actionsCreatores';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
// import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';


// TODO
// 2. Попробовать сделать пункт "Главная" в меню

export const Home = (): React.ReactElement => {
	const classes = useHomeStyles();
	const dispatch = useDispatch();
	const tweets = useSelector(selectTweetsItems);
	
	const isLoading = useSelector(selectIsTweetsLoading);

	// const isLoaded = useSelector(selectIsTweetsLoaded);

	React.useEffect(() => {
		dispatch(fetchTweets());
		dispatch(fetchTags());
	}, [dispatch]);

	return (
		<Paper className={classes.tweetsWrapper} variant="outlined">
			<Paper className={classes.tweetsHeader} variant="outlined">
				<Route path='/home/:any'>
					<BackButton />
					<Typography variant="h6">Назад к твитам</Typography>
				</Route>

				<Route path={['/home', '/home/search']} exact >
					<Typography variant="h6">Твиты</Typography>
				</Route>

				<Route path="/home/tweets">
					<Typography variant="h6">Твитнуть</Typography>
				</Route>
			</Paper>

			<Route exact path={['/home', '/home/search']}>
				<Paper>
					<div className={classes.addForm}>
						<AddTweetForm classes={classes} />
					</div>
					<div className={classes.addFormBottomLine} />
				</Paper>
			</Route>

			<Route path="/home" exact>
				{isLoading ? (
					<div className={classes.tweetsCentred}>
						<CircularProgress />
					</div>
				) : (
						tweets.map((tweet) => (
							<Tweet id={tweet._id} key={tweet._id} {...tweet} images={tweet.images} classes={classes} />
						)))}
			</Route>
			<Route path="/home/tweet/:id" component={FullTweet} />
		</Paper>
	);
};

