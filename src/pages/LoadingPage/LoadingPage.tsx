import React, { useEffect } from 'react';
import './LoadingPage.css';
import LogoParkIF from '../../../resources/LogoParkIF.png';
import { IonImg } from '@ionic/react';
import { useHistory } from 'react-router';

export default function LoadingPage() {
    const history = useHistory(); //Inicialziando hook de histórico

    useEffect(() => {
        const timer = setTimeout(() => {
            history.push('/userselect');
        }, 3000); //Redireciona para a página de login após 3 segundos
        return () => clearTimeout(timer);
    }, [history]);

    return (
        <div className='LoadingPage'>
            <IonImg
                className='LogoParkIF'
                src={LogoParkIF}
                alt='Logo ParkIF'
            ></IonImg>
        </div>
    );
}
