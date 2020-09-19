import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

import Icon from './images/product-logo.png'
import Icon2 from './images/user.png'

const HeadMain = () => {

    return(
        <header>
            <div>
                <img src={Icon}  alt="logo" class='logo'/>
            </div>
            {/* <a href="#" onclick="console.log('The link was clicked.'); return false" class='clickme'> 
                <div>click</div>
                <div>me</div>
            </a> */}
            <nav>
                <div class="menu">
                    <ul class="float">
                        <li class="first">
                            <a href="#" onclick="console.log('The link was clicked.'); return false" class='clickme'> 
                                <div>click</div>
                                <div>me</div>
                            </a>
                        </li>
                        <li class="second">
                            <a href="#" onclick="console.log('The link was clicked.'); return false" class='login'> 
                                <img src={Icon2}/>
                                <div>login</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeadMain