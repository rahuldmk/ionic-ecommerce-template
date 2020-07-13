import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonSlides pager={true} options={slideOpts} className="home-slider">
          <IonSlide>
            <img src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/11/Banner-Why-on-demand-grocery-apps-are-gaining-huge-popularity-in-India.png" /> 
          </IonSlide>
          <IonSlide>
            <img src="https://indiangroceryvictoria.com/groceryapp/wp-content/uploads/2018/06/7-2.jpg" />
          </IonSlide>
          <IonSlide>
          <img src="https://i.pinimg.com/originals/df/c1/f9/dfc1f9ba2734aa94690f009d721440d7.jpg" />
          </IonSlide>
        </IonSlides>

        <IonGrid>
          <IonRow>
            <IonCol>ion-col</IonCol>
          </IonRow>
        </IonGrid>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
