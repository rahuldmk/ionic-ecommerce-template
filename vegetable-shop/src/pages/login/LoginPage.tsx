import { IonContent, IonChip, IonIcon, IonList, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonItem, IonInput, IonPage } from '@ionic/react';
import { personOutline, lockClosedOutline, logoFacebook, logoGoogle } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import OrSeperator from '../../components/OrSeperator';
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
            <IonCol className="text-align-center">
              <img className="logo" src="../assets/logo.png" /><br />
              <span className="logo-title">Grocery Shop</span>
            </IonCol>
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
            <IonInput name="user_name" value="" placeholder="Enter User Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
            <IonIcon slot="end" icon={personOutline} className="input-icon-color" />
          </IonItem>
        </IonList>
        <br />
        <IonList className="input-border-radius">
          <IonItem>
            <IonInput type="password" name="user_password" value="" placeholder="Password" onIonChange={e => setText(e.detail.value!)}></IonInput>
            <IonIcon slot="end" icon={lockClosedOutline} className="input-icon-color" />
          </IonItem>
        </IonList>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="full" color="light" shape="round">Login</IonButton>
              <IonButton expand="full" color="light" shape="round" fill="clear">Forgot Password</IonButton>
            </IonCol>
          </IonRow>

          <OrSeperator ordisplay={true} color='#ffc409'></OrSeperator>


          <IonRow className="ion-align-items-start">
            <IonCol className="ion-align-self-start">
              <IonButton expand="block" color="light" fill="outline">
                <IonIcon slot="start" icon={logoFacebook} />
              Login with Facebook
              </IonButton>

              <IonButton expand="block" color="light" fill="outline">
                <IonIcon slot="start" icon={logoGoogle} />
              Login with Google
              </IonButton>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent >
    </IonPage >
  );
};

export default Login;
