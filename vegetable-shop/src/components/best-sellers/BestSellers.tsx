import React from 'react';
import './BestSeller.css';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react'
import { basketOutline } from 'ionicons/icons';

interface BestSellerProps {
    data: any
}

const BestSellers: React.FC<BestSellerProps> = ({ data }) => {
    console.log(data);
    return (
        <IonGrid>
            <IonRow style={{borderTop:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                <IonCol size="4" >
                  <img src={data.img} style={{height:'100%'}} />  
                </IonCol>
                <IonCol>
                    <div style={{fontWeight:'bold',fontSize:'18px'}}>{data.product_name}</div>
                    <div>{data.price}</div>
                    <IonButton color="success">
                        <IonIcon slot="start" icon={basketOutline} /> Add to cart
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default BestSellers;