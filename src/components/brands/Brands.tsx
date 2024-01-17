import React from 'react';
import './brands.scss';

const Brands: React.FC = () => {
    return (
    <div className='container'>
        <div>
        <img src="src\assets\images\hm.png" />
        </div>
        <div>
            <img src="src\assets\images\modstrom.png" alt="" />
        </div>
        <div>
            <img src="src\assets\images\OrionLondon.jpg" alt="" />
        </div>
        <div>
            <img src="src\assets\images\oddmolly.png" alt="" />
        </div>
        <div>
            <img src="src\assets\images\FrankDandy.png" alt="" />
        </div>
        <div>
            <img src="src\assets\images\FrankDandy.png" alt="" />
        </div>


        <div className='popular-txt'>
            <span>Populärt just nu!</span>
        </div>
    </div>
    );
};

export default Brands;
