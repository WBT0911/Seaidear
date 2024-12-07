import React from 'react';
import FillStar from './common/FillStar';

interface ToppartType {
    translate : (key : string) => string;
}

const Toppart: React.FC<ToppartType> = ({translate}) => {
    return (
        <div className="toppart">
            <div className="container">
            <div className="row">
                <div className="back">
                    <div className="logo">
                        <img src="https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/3c6ddd36-9aa4-43fe-770f-70d7c213ac00/avatar" alt="seaidear logo" />
                        <div>
                            <h5>
                                {translate('viewTitle')}
                            </h5>
                            <p>
                                {translate('viewAnswer')}
                            </p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="fir">
                            <p>
                                {translate('viewResult')}
                            </p>
                            <p>
                                5
                            </p>
                        </div>
                        <div className="sec">
                            <p>
                                {translate('viewQuality')}
                            </p>
                            <p>
                                5
                                <FillStar />
                                (5 {translate('views')})
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Toppart;