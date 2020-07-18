import { IonButtons, IonContent,IonListHeader,IonLabel, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import VegetableCard from '../components/VegetableCard';
import './Page.css';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: true,
  loop: true,
};

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="light">Grocery</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonSlides pager={true} options={slideOpts} className="home-slider">
          <IonSlide>
            <img src="https://firstchoice.je/pub/media/wysiwyg/magebig/layout04/veg-banner-small.jpg" />
          </IonSlide>
          <IonSlide>
            <img src="https://i.pinimg.com/originals/df/c1/f9/dfc1f9ba2734aa94690f009d721440d7.jpg" />
          </IonSlide>
        </IonSlides>
        <IonListHeader>
          <IonLabel>Shop by category</IonLabel>
        </IonListHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <VegetableCard title="Fruits" imgname="watermelon"></VegetableCard>
            </IonCol>
            <IonCol>
              <VegetableCard title="Vegetable" imgname="broccoli"></VegetableCard>
            </IonCol>
            <IonCol>
              <VegetableCard title="meat" imgname="turkey"></VegetableCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <VegetableCard title="Dairy" imgname="milk"></VegetableCard>
            </IonCol>
            <IonCol>
              <VegetableCard title="Beverages" imgname="frappe"></VegetableCard>
            </IonCol>
            <IonCol>
              <VegetableCard title="Snacks" imgname="fries"></VegetableCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonListHeader>
          <IonLabel>Shop Bestsellers</IonLabel>
        </IonListHeader>
      </IonContent>
    </IonPage>
  );
};

export default Page;
