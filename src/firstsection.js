import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YogaIcon from './images/hot_yoga.png'
import './style.css';
import Fab from '@material-ui/core/Fab';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


const TopSection = () => {
    const classes = useStyles();

    return (
        <div class="topsection">
            <div class="topcopy-img">
                <img src={YogaIcon} class="topcopy-img1"/>
            </div>
            <div class="topcopy-font">
                <span class="topcopy-em1">試作ページ</span>
                <br/>
                <span class="topcopy-em2">ここに新しく伝えたいメッセージなどを入れてください</span>
            </div>
            <div class="topcopy-bottun"> 
                <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
                    好きな文言を入れてください
                </Fab>
            </div>
            <div class="topcopy-scroll">
                <span class="topcopy-em3">scroll</span>
                <br/>
                <ExpandMoreIcon />
            </div>
        </div>
    );
}

export default TopSection;