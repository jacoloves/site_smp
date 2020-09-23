import React from 'react';
import './style.css';

import Program1 from './images/program_image.jpg'

const ThirdSection = () => {
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
            </div>
        </section>
    );
}

export default ThirdSection;