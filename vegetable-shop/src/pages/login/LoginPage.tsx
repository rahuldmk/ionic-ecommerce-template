import { IonContent, IonIcon, IonAvatar, IonList, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonItem, IonInput, IonPage } from '@ionic/react';
import { closeCircle, personOutline, lockClosedOutline } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';

import './LoginPage.css';

const Login: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const text = "Hello";

  function setText(value: string) {
    console.log(value);
  }

  return (
    <IonPage>
      <IonContent color="primary ion-padding" fullscreen>

        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol className="text-align-center"><img className="logo" src="https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX34974984.jpg" /></IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <h3><b>Sign in</b></h3>
              <p>Please fill in the credentials</p>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList className="input-border-radius">
          <IonItem>
            <IonInput value="" placeholder="Enter User Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
            <IonIcon slot="end" icon={personOutline} className="input-icon-color" />
          </IonItem>
        </IonList>
        <br />
        <IonList className="input-border-radius">
          <IonItem>
            <IonInput type="password" value="" placeholder="Password" onIonChange={e => setText(e.detail.value!)}></IonInput>
            <IonIcon slot="end" icon={lockClosedOutline} className="input-icon-color" />
          </IonItem>
        </IonList>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="full" color="warning" shape="round">Login</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent >
    </IonPage >
  );
};

export default Login;
