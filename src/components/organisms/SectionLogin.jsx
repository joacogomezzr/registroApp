import React, { useState } from 'react';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css';
import Textos from '../atoms/Textos';

function SectionLogin() {
    const [producto, setProducto] = useState('');
    const [fecha, setFecha] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');

    const datos = {
        producto,
        fecha,
        cantidad,
        celular,
        correo
    };

    return (
            <div id="login_section">
                <Field type="text" placeholder="Dulce" text="Tipo de dulce" value={producto} onChange={(e) => setProducto(e.target.value)} />
                <Field type="datetime-local" text="Fecha del Pedido" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <Field type="number" placeholder="Cantidad" text="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                <Field type="tel" placeholder="Celular" text="Número de Telefono" value={celular} onChange={(e) => setCelular(e.target.value)}/>
                <Field type="email" placeholder="Email" text="Correo electronico" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                <Textos datos={datos}/>
            </div>
    );
}

export default SectionLogin;
