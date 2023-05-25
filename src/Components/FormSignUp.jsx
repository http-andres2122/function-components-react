import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from 'react';


function FormSignUp () {
    const [name, setName] = useState('')
    useEffect(() => {
        console.log("name cmabio: ", name)
    }, [name])

    return <form>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="filled" 
            type="text" 
            fullWidth
            margin='normal'
            onChange={(e)=>{
                console.log(e.target.value)
                setName(e.target.value)
            }}
            value={name}
        />
        <TextField 
            id="lastname" 
            label="Apellidos" 
            variant="filled" 
            type="text"
            fullWidth
            margin='normal'
        />
        <TextField 
            id="email" 
            label="Correo electronico" 
            variant="filled" 
            type="email"
            fullWidth
            margin='normal'
        />
        <FormGroup>
            <FormControlLabel control={ <Switch defaultChecked /> } label="Promociones" />
            <FormControlLabel control={ <Switch defaultChecked /> } label="Novedades" />
        </FormGroup>
        <Button variant='contained'>Registrarse</Button>
    </form>
}

export default FormSignUp