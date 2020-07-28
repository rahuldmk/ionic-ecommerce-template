import {IonGrid, IonRow, IonCol} from '@ionic/react';
import React from 'react';
import './Product.css';

interface ProductProps{
    display:string,
    img:string
}

const Product:React.FC<ProductProps>=({display,img})=>{
    return(
        <IonGrid>
            <IonRow>
                <IonCol>
                    <p>Product Information</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default Product;