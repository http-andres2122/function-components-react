import './App.css';
import FormSignUp from './Components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const handleSubmit = (valores) => {
  console.log("App JS", valores)
}

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align="center" component={"h3"}>Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>

  );
}

export default App;
