import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

import LockOpenIcon from '@material-ui/icons/LockOpen';

const HeadMain = () => {

    return(
        <header>
            <div class="header-logo">
            </div>
            <a href="#" onclick="console.log('The link was clicked.'); return false" class='clickme-pink'> 
                <div>click</div>
                <div>me</div>
            </a>
            <a href="#" onclick="console.log('The link was clicked.'); return false" class='click-login'> 
                <LockOpenIcon fontSize="medium"/>
                <div>login</div>
            </a>
        </header>
    );
}

export default HeadMain