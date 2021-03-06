import React from 'react';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Avatar, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/theme';
import { Link, useHistory } from 'react-router-dom';
import { formDate } from '../utils/formatDate';
import { ImageList } from './ImageList';
import { removeTweet } from '../store/ducks/tweets/actionsCreatores';
import { useDispatch } from 'react-redux';

interface TweetProps {
	id: string;
	text: string;
	classes: ReturnType<typeof useHomeStyles>;
	createdAt: string;
	images?: string[];
	user: {
		fullname: string;
		username: string;
		avatarUrl: string;
	};
}

export const Tweet: React.FC<TweetProps> = ({
	id,
	text,
	user,
	classes,
	images,
	createdAt
}: TweetProps): React.ReactElement => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
		event.preventDefault();
		history.push(`/home/tweet/${id}`);
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event: React.MouseEvent<HTMLElement>): void => {
		event.stopPropagation();
		event.preventDefault();
		setAnchorEl(null);
	};

	const handleRemove = (event: React.MouseEvent<HTMLElement>): void => {
		handleClose(event);
		// if (window.confirm('Вы действительно хотите удалить твит?')) {
		dispatch(removeTweet(id));
	};
	console.log(user?.fullname)

	return (
		<a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${id}`}>
			<Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
				{user && <Avatar
					className={classes.tweetAvatar}
					alt={`Аватарка пользователя ${user?.fullname}`}
				/>}
				<div className={classes.tweetContent}>
					<div className={classes.tweetHeader}>
						<div>
							{user && (<b>{user.fullname}</b>)}
							{user && <span className={classes.tweetUserName}>@{user.username}</span>}
							<span className={classes.tweetUserName}>·</span>&nbsp;
							<span className={classes.tweetUserName}>{formDate(new Date(createdAt))}</span>
						</div>
						<div>
							<IconButton
								aria-label="more"
								aria-controls="long-menu"
								aria-haspopup="true"
								onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
							<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
								<MenuItem onClick={handleClose}>Редактировать</MenuItem>
								<MenuItem onClick={handleRemove}>Удалить твит</MenuItem>
							</Menu>
						</div>
					</div>
					<Typography variant="body1" gutterBottom>
						{text}
						{images && <ImageList classes={classes} images={images} />}
					</Typography>
					<div className={classes.tweetFooter}>
						<div>
							<IconButton>
								<CommentIcon style={{ fontSize: 20 }} />
							</IconButton>
							<span>1</span>
						</div>
						<div>
							<IconButton>
								<RepostIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<LikeIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<ShareIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
					</div>
				</div>
			</Paper>
		</a>
	);
};

