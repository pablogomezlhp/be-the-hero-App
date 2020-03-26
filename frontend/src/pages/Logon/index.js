import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import './style.css';
import LogoImg from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('OngId', id)
            localStorage.setItem('OngName', response.data.name)


            history.push('/profile');
        } catch(err){
            alert('Falha no Login, tente novamente')
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" 
                    value={id}
                    onChange={ e => setId(e.target.value)}
                    />
                    <button className="button" type="Entrar"> Entrar</button>

                    <Link className="back-link" to='/register'>
                        <FiLogIn size={16} color="#E02041" />
            Nao Tenho Cadastro
        </Link>

                </form>

            </section>

            <img src={HeroesImg} alt="Heroes" />
        </div>
    );
}