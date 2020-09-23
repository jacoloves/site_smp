import React from 'react';

import TopSection from './firstsection'
import SecSection from './secondsection'
import ThirdSection from './thirdsection'

const ContainerMain = () => {

    return (
        <div class="container">
            <TopSection />
            <SecSection />
            <ThirdSection />
        </div>
    );
}

export default ContainerMain;