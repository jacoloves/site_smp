import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import Fab from '@material-ui/core/Fab';

import Teacher1 from './images/taisou_woman_yuka.png'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  

const SecSection = () => {
    const classes = useStyles();

    return (
        <div class="secondconatainer">
            <div class="seccopy-font1">
                <span class="seccopy-em1">講師陣のご紹介</span>
            </div>
            <div class="seccopy-font2">
                <span class="seccopy-em2">ここでは講師経歴や担当コンテンツを記載します。</span>
                <br/>
                <span class="seccopy-em3">気に入った講師のコースがあれば見てみましょう。</span>
            </div>
            <ul class="member-introduction">
                <li class="teacher-item">
                    <div class="teacher-photo">
                        <img src={Teacher1}/>
                    </div>
                    <div class="teacher-info">
                        <p class="teacher-section-info">「講師の担当教材」</p>
                        <p class="teacher-name-en">Mrs.Sample</p>
                        <p class="teacher-name-ja">サンプルさん</p>
                        <ul class="teacher-section-text-list">
                            <li class="teacher-section-text">
                                今までの講師の実績などを入力する
                            </li>
                            <li class="teacher-section-text">
                                今までの講師の実績などを入力するその２
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="teacher-item">
                    <div class="teacher-photo">
                        <img src={Teacher1}/>
                    </div>
                    <div class="teacher-info">
                        <p class="teacher-section-info">「講師の担当教材」</p>
                        <p class="teacher-name-en">Mrs.Sample</p>
                        <p class="teacher-name-ja">サンプルさん</p>
                        <ul class="teacher-section-text-list">
                            <li class="teacher-section-text">
                                今までの講師の実績などを入力する
                            </li>
                            <li class="teacher-section-text">
                                今までの講師の実績などを入力するその２
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="teacher-item">
                    <div class="teacher-photo">
                        <img src={Teacher1}/>
                    </div>
                    <div class="teacher-info">
                        <p class="teacher-section-info">「講師の担当教材」</p>
                        <p class="teacher-name-en">Mrs.Sample</p>
                        <p class="teacher-name-ja">サンプルさん</p>
                        <ul class="teacher-section-text-list">
                            <li class="teacher-section-text">
                                今までの講師の実績などを入力する
                            </li>
                            <li class="teacher-section-text">
                                今までの講師の実績などを入力するその２
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="sample_button">
                <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
                    好きな文言を入れてください
                </Fab>
            </div>
        </div>
    );
}

export default SecSection;