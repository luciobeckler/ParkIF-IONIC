import React from 'react';
import './UserSelectPage.scss';
import { IonButton, IonImg } from '@ionic/react';
import LogoParkIf from '../../../resources/LogoParkIF.png';

export default function UserSelectPage() {
    return (
        <div className='UserSelectPage'>
            <IonImg src={LogoParkIf}></IonImg>
            <IonButton>Administração</IonButton>
            <IonButton>Aluno</IonButton>
            <IonButton>Porteiro</IonButton>
        </div>
    );
}
