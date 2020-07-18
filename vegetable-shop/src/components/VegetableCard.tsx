import React from 'react';
import './VegetableCard.css';

interface VegetableCardProps {
    title: string,
    imgname: string
};

const VegetableCard: React.FC<VegetableCardProps> = ({ title, imgname }) => {
    return (
        <div className="v-card">
            <img src={'../assets/svg/' + imgname + '.svg'} />
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default VegetableCard;
