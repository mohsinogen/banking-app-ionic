import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import CardItem from '../../components/CardItem/CardItem';
import { add } from 'ionicons/icons';
import { cards } from '../../utils/data';


function Cards() {


    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar color={'dark'} mode='ios' style={{ '--min-height': '50px' }}>
                    <IonTitle>Cards</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={add}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

            </IonHeader>
            <IonContent color={'dark'}>

                <div style={{ margin: '10px' }}>
                    {cards.map((item, index) => (
                        <div  key={index} style={{margin:'5px'}}>
                            <CardItem cardData={item}  />
                        </div>
                    ))}
                </div>

            </IonContent>
        </IonPage>
    )
}

export default Cards
