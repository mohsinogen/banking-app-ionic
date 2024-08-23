import React from 'react'
import { IonCol, IonRow, IonText } from '@ionic/react'
import { Transaction } from '../../types/global.types'


function TransactionItem({ transaction }: { transaction: Transaction }) {
    return (
        <IonRow className='ion-justify-content-between ion-align-items-center ion-margin-top'>
            <IonCol size='2.5' className='d-flex centered'>
                <div className='d-flex centered' style={{ background: 'var(--ion-color-light-shade)', borderRadius: '80px', width: '55px', height: '55px' }}>
                <img
                style={{ width: '50px', height: '50px', borderRadius: '50px' }}
                alt="image" src={transaction.image ? transaction.image : "https://ionicframework.com/docs/img/demos/avatar.svg"} />
                </div>
                
            </IonCol>
            <IonCol size='7'>
                <IonRow><IonText className='f-bold f-family-poppins' color={'light'}>
                    {transaction.name}
                </IonText></IonRow>
                <IonRow><IonText className='f-size-6-px' color={'light'} >
                    {transaction.date}
                </IonText></IonRow>
            </IonCol>
            <IonCol size='2.5' className='d-flex centered'>
                <IonText className='f-bold'>
                    {transaction.type === 'debit' ? '-' : '+'} &#x20b9;{transaction.amount}
                </IonText>
            </IonCol>
        </IonRow>
    )
}

export default TransactionItem
