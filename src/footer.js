import React from 'react';
import './style.css';
import InstagramIcon from '@material-ui/icons/Instagram';

import FooterLogo from './images/product-logo.png'

const FooterMain = () => {

    return(
        <footer>
            <div class="footer-inner container-inner">
                <div>
                    <img class="footer-logo" src={FooterLogo} />
                </div>
                <div>
                    <a href="#">
                        <InstagramIcon />
                    </a>
                </div>
                <ul class="footer-link">
                    <a href="#">
                        <li>運営会社</li>
                    </a>
                    <a href="#">
                        <li>利用規約</li>
                    </a>
                    <a href="#">
                        <li>プライバシーポリシー</li>
                    </a>
                    <a href="#">
                        <li>お問い合わせ</li>
                    </a>
                </ul>
                <p class="footer-copyright">©️ 2020 SAMPLE ALL Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default FooterMain