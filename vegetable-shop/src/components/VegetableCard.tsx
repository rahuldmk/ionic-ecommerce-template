import React from 'react';
import { IonCard, IonLabel } from '@ionic/react';


interface VegetableCardProps {
    title: string,
    svgpath: string
};

const VegetableCard: React.FC<VegetableCardProps> = ({ title, svgpath }) => {
    return (
        <IonCard>
            <IonLabel>{{title}}</IonLabel>
        </IonCard>
    );
};

export default VegetableCard;
