import { CircularProgress, IconButton, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweet, setTweet } from '../../../store/ducks/tweet/actionsCreatores';
import { selectTweetData, selectIsTweetLoading } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../../theme';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import format from "date-fns/format";
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import ruLang from 'date-fns/locale/ru'

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const dispatch = useDispatch();
    console.log(tweetData);

    const params: { id?: string } = useParams();

    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweet(id));
        }

        return () => {
            dispatch(setTweet(undefined));
        }

    }, []);

    if (isLoading) {
        return <div className={classes.tweetsCentred}>
            <CircularProgress />
        </div>
    }

    if (tweetData) {
        return (
            <Paper className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                        src={tweetData.user.avatarUrl}
                    />
                    <Typography>
                        <b>{tweetData.user.fullname}</b>&nbsp;
                <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
                <Typography>
                    <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'H:mm', { locale: ruLang })} · </span>
                    <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', { locale: ruLang })}</span>
                </Typography>
                <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
                    <IconButton>
                        <CommentIcon style={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton>
                        <RepostIcon style={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton>
                        <LikeIcon style={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton>
                        <ShareIcon style={{ fontSize: 25 }} />
                    </IconButton>
                </div>
            </Paper>
        )
    }

    return null;
}

{/* <div className={classes.tweetFooter}>
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
</div> */}