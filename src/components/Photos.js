import React from 'react';
import gg1 from '../assets/gg1.JPG'
import gg2 from '../assets/gg2.PNG'
import gg3 from '../assets/gg3.JPG'
import gg4 from '../assets/gg4.JPG'

const Photos = () => {
    return (
        <div className='photoArray'>
            <img className='promo' src={gg1} />
            <img className='promo' src={gg2} />
            <img className='promo' src={gg3} />
            <img className='promo' src={gg4} />
        </div>
    )
}


export default Photos;