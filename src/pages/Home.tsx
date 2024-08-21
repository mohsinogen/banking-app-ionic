import { IonAvatar, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { arrowDown, arrowUp, eye, notificationsOutline, qrCode } from 'ionicons/icons';
import { useRef } from 'react';

const Home: React.FC = () => {

  const cards = [
    {
      amount: '53,454.56',
      carNumber: '4345',
      expire: '03/32',
    },
    {
      amount: '24,434.06',
      carNumber: '4532',
      expire: '10/33',
    },
    {
      amount: '24,434.06',
      carNumber: '4532',
      expire: '10/33',
    },
  ];


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
            <IonButton color={'light'} shape='round'>
              <IonIcon color='dark' slot="icon-only" icon={notificationsOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent fullscreen >

        <div style={{ display: 'flex', flexDirection: 'column', height:'100%' }}>

          <div className='d-flex card-container'>
            {cards.map((item, index) => (
              <div key={index} color={'light'} className='card-item'>
                <IonRow className='ion-justify-content-end'>
                  <IonCol size='2'>
                    <img style={{ width: '50px' }} src={'./visaLogo.png'} />
                  </IonCol>
                </IonRow>
                <IonText>Your Balance</IonText>
                <IonRow>
                  <IonCol>
                    <IonText color={'dark'} className='f-bold f-size-2-px'>&#x20b9;{item.amount}</IonText>
                  </IonCol>
                  <IonCol size='2'>
                    <IonButton fill='outline' color={'light'} shape='round'>
                      <IonIcon color='dark' slot="icon-only" icon={eye}></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow className='ion-align-items-center ion-justify-content-between'>
                  <IonCol className='d-flex' style={{ flexDirection: 'column', alignItems: 'start' }} size='5'>
                    <IonText>Card Number</IonText>
                    <IonText className='f-bold' color={'dark'}>&#9679;&#9679;&#9679;&#9679;{item.carNumber}</IonText>
                  </IonCol>
                  <IonCol className='d-flex' style={{ flexDirection: 'column', alignItems: 'end' }} size='3'>
                    <IonText>Valid Till</IonText>
                    <IonText className='f-bold' color={'dark'}>{item.expire}</IonText>
                  </IonCol>
                </IonRow>

              </div>
            ))}
          </div>

          <IonRow className='ion-align-items-center ion-justify-content-between'>
            <IonCol size='5'>
              <IonButton expand='block' mode='ios' shape='round' color={'light'}>
                <IonIcon slot="start" icon={arrowDown}></IonIcon>
                Receive
              </IonButton>
            </IonCol>
            <IonCol size='5'>
              <IonButton expand='block' mode='ios' shape='round' color={'light'}>
                <IonIcon slot="start" icon={arrowUp}></IonIcon>
                Pay
              </IonButton>
            </IonCol>
            <IonCol className='d-flex centered' size='2'>
              <IonButton color={'light'} shape='round' size='large'>
                <IonIcon color='dark' slot="icon-only" icon={qrCode}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <div className='recent-transactions'>
             
              <IonRow className='ion-justify-content-between ion-align-items-center'>
                <IonCol size='3' className='d-flex centered'>
                  <img style={{ width: '44px', height: '44px', borderRadius: '50px' }} alt="image" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonCol>
                <IonCol size='7'>
                  <IonRow><IonText color={'medium'}>
                    Welcome Back
                  </IonText></IonRow>
                  <IonRow><IonText color={'dark'} className='f-bold'>
                    test user!
                  </IonText></IonRow>
                </IonCol>
                <IonCol>
                  <IonText className='f-bold' color={'success'}>
                    + 677
                  </IonText>
                </IonCol>
              </IonRow>
          </div>
        </div>



      </IonContent>
    </IonPage>
  );
};

export default Home;
