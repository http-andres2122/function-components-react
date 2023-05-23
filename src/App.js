import './App.css';
import FormSignUp from './Components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align="center" component={"h3"}>Formulario Registro</Typography>
      <FormSignUp/>
    </Container>

  );
}

export default App;
