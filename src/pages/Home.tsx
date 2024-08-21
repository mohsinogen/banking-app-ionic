import { IonAvatar, IonBadge, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { arrowDown, arrowUp, eye, notifications, notificationsOutline, qrCode } from 'ionicons/icons';
import { useRef } from 'react';
import TransactionItem from '../components/TransactionItem/TransactionItem';
import { Transaction } from '../types/global.types';

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

  const transactions: Transaction[] = [
    {
      name: 'John Peter',
      amount: 600,
      type: 'debit',
      image: './avatars/Avatar-1.png',
      date: '19th Jul 2024, 10:34 am'
    },
    {
      name: 'Sarah Miller',
      amount: 1500,
      type: 'credit',
      image: './avatars/Avatar-2.png',
      date: '21st Jul 2024, 02:45 pm'
    },
    {
      name: 'Michael Smith',
      amount: 320,
      type: 'debit',
      image: './avatars/Avatar-3.png',
      date: '22nd Jul 2024, 11:30 am'
    },
    {
      name: 'Emily Davis',
      amount: 840,
      type: 'debit',
      image: './avatars/Avatar-4.png',
      date: '23rd Jul 2024, 04:20 pm'
    },
    {
      name: 'James Brown',
      amount: 1250,
      type: 'credit',
      image: './avatars/Avatar-5.png',
      date: '24th Jul 2024, 08:10 am'
    },
    {
      name: 'Olivia Wilson',
      amount: 760,
      type: 'debit',
      image: './avatars/Avatar-6.png',
      date: '25th Jul 2024, 01:15 pm'
    },
    {
      name: 'David Johnson',
      amount: 1320,
      type: 'credit',
      image: './avatars/Avatar-7.png',
      date: '26th Jul 2024, 09:50 am'
    },
    {
      name: 'Sophia Martinez',
      amount: 410,
      type: 'debit',
      image: './avatars/Avatar-8.png',
      date: '27th Jul 2024, 03:30 pm'
    },
    {
      name: 'Daniel Rodriguez',
      amount: 920,
      type: 'credit',
      image: './avatars/Avatar-9.png',
      date: '28th Jul 2024, 07:25 am'
    }
  ];



  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonRow className='ion-align-items-center ion-justify-content-between ion-margin-top'>
          <IonCol>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
              <div className='d-flex centered' style={{ background: 'var(--ion-color-light)', borderRadius: '80px', width: '55px', height: '55px' }}>
                <img width={'50px'} height={'50px'} src='./avatars/Avatar-12.png' />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <IonText className='f-family-roboto f-size-6-px' color={'light'}>
                  Welcome Back
                </IonText>
                <IonText color={'light'} className='f-bold f-family-poppins'>
                  Peter Parker!
                </IonText>
              </div>
            </div>
          </IonCol>
          <IonCol size={'2'}>
            <IonButton color={'light'} shape='round'>
              <IonIcon color='dark' slot="icon-only" icon={notifications}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent fullscreen>

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

          <div className='d-flex card-container'>
            {cards.map((item, index) => (
              <div key={index} color={'light'} className='card-item'>
                <IonRow className='ion-justify-content-end'>
                  <IonCol size='2'>
                    <img style={{ width: '50px' }} src={'./visaLogo.png'} />
                  </IonCol>
                </IonRow>
                <IonText color={'medium'} className='f-size-6-px'>Your Balance</IonText>
                <IonRow>
                  <IonCol>
                    <IonText color={'dark'} className='f-bold f-size-2-px f-family-poppins'>&#x20b9;{item.amount}</IonText>
                  </IonCol>
                  <IonCol size='2'>
                    <IonButton fill='outline' color={'light'} shape='round'>
                      <IonIcon color='dark' slot="icon-only" icon={eye}></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow className='ion-align-items-center ion-justify-content-between'>
                  <IonCol className='d-flex' style={{ flexDirection: 'column', alignItems: 'start' }} size='5'>
                    <IonText color={'medium'} className='f-size-7-px'>Card Number</IonText>
                    <IonText className='f-bold f-family-poppins f-size-6-px' color={'dark'}>&#9679;&#9679;&#9679;&#9679;{item.carNumber}</IonText>
                  </IonCol>
                  <IonCol className='d-flex' style={{ flexDirection: 'column', alignItems: 'end' }} size='3'>
                    <IonText color={'medium'} className='f-size-7-px'>Valid Thru</IonText>
                    <IonText className='f-bold f-family-poppins f-size-6-px' color={'dark'}>{item.expire}</IonText>
                  </IonCol>
                </IonRow>

              </div>
            ))}
          </div>

          <IonRow className='ion-align-items-center ion-justify-content-between'>
            <IonCol size='5'>
              <IonButton className='f-bold' expand='block' mode='ios' shape='round' color={'light'}>
                <IonIcon slot="start" icon={arrowDown}></IonIcon>
                Receive
              </IonButton>
            </IonCol>
            <IonCol size='5'>
              <IonButton className='f-bold' expand='block' mode='ios' shape='round' color={'light'}>
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

            <IonRow className='ion-align-items-center ion-justify-content-between'>
              <IonCol size='7'>
                <IonText color={'dark'} className='f-bold f-size-4-px f-family-poppins'>Transactions</IonText>
              </IonCol>
              <IonCol size='2.5'><IonText color={'medium'} className='t-underline f-size-6-px f-bold'>
                View All</IonText></IonCol>
            </IonRow>

            {transactions.map((item, index) => (
              <TransactionItem transaction={item} />
            ))}
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
