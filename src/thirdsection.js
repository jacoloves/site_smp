import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import Fab from '@material-ui/core/Fab';

import Program1 from './images/program_image.jpg'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const ThirdSection = () => {
    const classes = useStyles();

    return (
        <section class="thirdconatainer">
            <div class="thirdconatainer-inner">
                <div class="thirdcopy-font1">
                    <span class="thirdcopy-em1">プログラムなどを記載してください。</span>
                </div>
                <ul class="program-list">
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>
                    <li class="program-list-item">
                        <img src={Program1} class="program-list-item-image"/>
                        <span class="program-list-item-name">SAMPLE1</span>
                    </li>   
                </ul>
                <div class="thirdcopy-video">
                    <iframe id="player" type="text/html" width="640" height="360"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0">
                    </iframe>
                </div>
                <div class="thirdcopy-font2">
                    <span class="thirdcopy-em2">プログラムの宣伝などを記載してください。</span>
                </div>
                <div class="sample_button">
                    <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
                        好きな文言を入れてください
                    </Fab>
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;