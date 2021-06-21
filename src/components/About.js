import React from 'react';
import Banner from './Banner'
import Photos from './Photos';

const About = () => {

    return (
        <div className='About'>
            <Banner></Banner>
            <div className='aboutBlurb'>
                <h1>What is a Great Grate?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem orci, tincidunt ut lacus et, pharetra scelerisque libero. Vestibulum ut ornare tortor. Suspendisse sed justo eget purus fermentum sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque odio velit, cursus eget diam sed, elementum lacinia neque. Nam molestie est quis mollis tincidunt. Quisque rhoncus felis nisi, ut tincidunt eros consequat id.

                    Morbi dolor ligula, elementum at posuere non, auctor porta justo. Proin iaculis mauris et diam pulvinar, nec venenatis turpis gravida. Cras eget venenatis nibh. Nullam placerat fringilla pretium. Vestibulum molestie venenatis risus at sollicitudin. Donec a bibendum lectus, non placerat nulla. Suspendisse non ipsum eleifend, venenatis nulla id, condimentum nisl. Nam vitae dolor nunc. In eu risus blandit, rhoncus nulla ac, mollis metus. In quis pulvinar nisl. Donec malesuada et elit sit amet ullamcorper.
                </p>
                <p>
                    Proin vitae rhoncus urna. Pellentesque at blandit magna, rhoncus dapibus odio. Duis iaculis scelerisque nibh, in hendrerit ipsum ultrices et. Nulla sit amet rutrum purus, mattis vulputate ligula. Nulla a laoreet lectus, sit amet faucibus risus. Curabitur sollicitudin vulputate mi, eget gravida est maximus id. Donec lacinia finibus nisl at gravida.

                    Curabitur convallis pretium purus ut sollicitudin. Integer ac finibus nulla. Morbi nec rutrum augue. Fusce consectetur arcu eget augue ornare tristique. Suspendisse quis blandit enim. Aliquam rutrum nibh at augue ornare, venenatis aliquam ipsum faucibus. Cras laoreet magna vitae leo ultrices scelerisque. Suspendisse sem eros, vestibulum at quam non, vulputate lacinia urna.

                    Nullam feugiat luctus suscipit. Aliquam venenatis ac orci ut aliquam. Maecenas in aliquet felis. Donec pharetra eget ante at pulvinar. Mauris at eleifend magna. Nunc finibus, nulla ut dapibus ornare, elit lacus dapibus leo, sed vulputate magna quam quis risus. Sed efficitur eros ac massa elementum, eget posuere libero maximus.
                </p>
            </div>

            <Photos></Photos>


        </div >
    )
}


export default About;