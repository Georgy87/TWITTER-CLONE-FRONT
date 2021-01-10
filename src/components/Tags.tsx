import React from 'react';
import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/theme';
import { TagsState } from '../store/ducks/tags/contracts/state';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({
    classes,
}: TagsProps): React.ReactElement | null => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {items.map(obj => (
                    <div key={obj._id} >
                        <ListItem key={obj._id} className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${obj.name}`}>
                                <ListItemText
                                    primary={obj.name}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Твитов: {obj.count}
                                        </Typography>
                                    }
                                />
                            </Link>
                        </ListItem>
                        <Divider component="li" />
                    </div>
                )
                )}
            </List>
        </Paper>
    );
};