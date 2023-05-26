import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';


function FormSignUp (props) {
    const {handleSubmit} = props
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(true)
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 
                "Debern ser al menos 3 caracteres",
        },
    })

    function validarNombre(nombre){
        if(nombre.length >= 3){
            return { name: { error: false, message: "" } }
        }else{
            return { name: { error: true, message: "Debern ser al menos 3 caracteres" }}
        }
    }

    return <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit({name, lastName, email, prom, nov})
    }} >
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
            error={ errors.name.error }
            helperText={ errors.name.error ? errors.name.message : "" }
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value))
            }}
        />
        <TextField 
            id="lastname" 
            label="Apellidos" 
            variant="filled" 
            type="text"
            fullWidth
            margin='normal'
            value={lastName}
            onChange={(e)=>{
                console.log(e.target.value)
                setLastName(e.target.value)
            }}
        />
        <TextField 
            id="email" 
            label="Correo electronico" 
            variant="filled" 
            type="email"
            fullWidth
            margin='normal'
            value={email}
            onChange={(e)=>{
                console.log(e.target.value)
                setEmail(e.target.value)
            }}
        />
        <FormGroup>
            <FormControlLabel 
                control={ 
                    <Switch checked={ prom } onChange={(e)=> setProm(e.target.checked)}/> 
                } 
                label="Promociones" 
                />
            <FormControlLabel 
                control={ 
                    <Switch checked={nov} onChange={(e)=> setNov(e.target.checked)} /> 
                    } 
                    label="Novedades" 
                    />
        </FormGroup>
        <Button variant='contained' type='submit' >Registrarse</Button>
    </form>
}

export default FormSignUp