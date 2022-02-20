import React, { useState } from 'react';
import { Button, Divider, Field, Subtitle, Title } from '../../../Common/Components/CommonComponents';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function SessionScreenFormat({ login, register, className }) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [on, setOn] = useState(false)

    return <main className={className}>
        <section className='session-sec1'>
            <div>
                <Title text="Bienvenido a la nueva forma de aprender" />
                <center><Divider width="50%" /></center>
                <Subtitle text="Prof. Ariel Aguilera" />
            </div>
            <Button text="Más información" width="fit-content" />
        </section>
        <section className='session-sec2'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setOn(!on);
                // login(userName, password);
            }} id="myForm">
                <Subtitle text="Iniciar sesión" />

                <Divider width="60%" />

                <Field onChangeText={setUserName} label upperCase labelText="Nombre de usuario" />
                <Field reactStyle={{ marginTop: "5%" }} onChangeText={setPassword} label upperCase labelText="Contraseña" password={true} />
            </form>

            <div>
                <Button
                text = {on ? null : "CONTINUAR" }
                children={
                    
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                        <CircularProgress size={20} />
                    </Box>
                } type="submit" form="myForm" />
                <Button text="Registrarse" onClick={() => register()} />
            </div>
        </section>
    </main>
}

export default SessionScreenFormat;