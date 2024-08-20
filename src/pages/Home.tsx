import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { arrowDown, arrowUp, notificationsOutline, qrCode } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonRow className='ion-align-items-center ion-justify-content-between'>
          <IonCol>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img width={'50px'} src='https://github.com/alanmontgomery/ionic-clubhouse-spaces-ui/blob/main/public/avatars/Avatar-36.png?raw=true' />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IonText color={'medium'}>
                  Welcome Back
                </IonText>
                <IonText color={'dark'} className='f-bold'>
                  test user!
                </IonText>
              </div>
            </div>



          </IonCol>
          <IonCol size={'2'}>
            <IonButton fill='outline' color={'light'} shape='round'>
              <IonIcon color='dark' slot="icon-only" icon={notificationsOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent fullscreen>

        <IonRow className='ion-align-items-center ion-justify-content-between'>
          <IonCol size='4.5'>
            <IonButton expand='block' mode='ios' shape='round' color={'light'}>
              <IonIcon slot="start" icon={arrowDown}></IonIcon>
              Receive
            </IonButton>
          </IonCol>
          <IonCol size='4.5'>
            <IonButton expand='block' mode='ios' shape='round' color={'light'}>
              <IonIcon slot="start" icon={arrowUp}></IonIcon>
              Pay
            </IonButton>
          </IonCol>
          <IonCol className='d-flex centered' size='3'>
            <IonButton fill='outline' color={'light'} shape='round' size='large'>
              <IonIcon color='dark' slot="icon-only" icon={qrCode}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
