import React from 'react';
import{
    Link
} from 'react-router-dom';
import gotLost from './images/gotLost.jpg';
import styles from './styles/error.css';


export default function Error(){
    return(
        <div className='error'>
            <h1>Упс! Только не паникуйте!</h1>
            <img src={gotLost} alt='Error404' className='error_img'/>
            <div>Вы потерялись из-за какой-то ошибки на серсере или неправильного адреса, но не переживайте.</div>
            <div>Позвольте сопроводить вас на <Link to='/'>Главную страницу</Link>.</div>
        </div>
    )
}