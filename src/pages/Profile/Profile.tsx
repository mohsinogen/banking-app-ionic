import { IonContent, IonIcon, IonItem, IonLabel, IonPage, IonText } from '@ionic/react'
import { exit, informationCircle, settings } from 'ionicons/icons'
import React from 'react'

function Profile() {
    return (
        <IonPage>
            <IonContent color={'dark'}>
                <div className='d-flex' style={{flexDirection:'column', height:'100%'}}>
                <div className='d-flex' style={{ flexDirection: 'column', marginTop: '30px',  alignItems: 'center' }}>
                    <div
                        className="d-flex centered"
                        style={{
                            background: "var(--ion-color-light)",
                            borderRadius: "80px",
                            width: "150px",
                            height: "150px",
                            marginLeft: "5px",
                        }}
                    >
                        <img
                            width={"150px"}
                            height={"150px"}
                            src="./avatars/Avatar-12.png"
                        />
                    </div>
                    <IonText className='f-family-poppins f-bold f-size-4-px' color={'light'}>Peter Parker</IonText>
                    <IonText className='f-bold f-size-5-px' color={'light'}>peter123@gmail.com</IonText>
                </div>

                <div style={{
                    background: 'var(--ion-color-primary)',
                    flexGrow: 1,
                    borderTopLeftRadius: '30px',
                    borderTopRightRadius: '30px',
                    padding: '15px 10px 20px 10px',
                    marginTop: '15px'
                }}>
                    <IonItem button mode='md' color={'primary'}>
                        <IonIcon aria-hidden="true" icon={settings} slot="start"></IonIcon>
                        <IonLabel>Settings</IonLabel>
                    </IonItem>
                    <IonItem button mode='md' color={'primary'}>
                        <IonIcon aria-hidden="true" icon={informationCircle} slot="start"></IonIcon>
                        <IonLabel>Get Help</IonLabel>
                    </IonItem>
                    <IonItem button mode='md' color={'primary'}>
                        <IonIcon aria-hidden="true" icon={exit} slot="start"></IonIcon>
                        <IonLabel>Logout</IonLabel>
                    </IonItem>
                </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Profile
