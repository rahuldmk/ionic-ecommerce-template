import { IonContent, IonList,IonGrid,IonRow,IonCol, IonButton, IonLabel, IonItem, IonInput, IonPage } from '@ionic/react';
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
        <IonList>
          <IonItem>
            <IonLabel color="primary" position="stacked">User Name:</IonLabel><br />
            <IonInput placeholder="User Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel color="primary" position="stacked">Password:</IonLabel><br />
            <IonInput type="password" placeholder="Password" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          
        </IonList>

        <IonGrid>
          <IonRow>
            <IonCol><IonButton color="danger">Login</IonButton></IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Login;
