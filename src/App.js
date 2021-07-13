import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton  from '@material-ui/core/IconButton'; 
import AddButton  from '@material-ui/icons/Add';
import RemoveButton  from '@material-ui/icons/Remove';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
  root:  {
    '& .MuiTextField-root':{
    background: 'White',
    margin: theme.spacing(1),
    },
  }, 
  button: {        
  margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles();
    const [inputFields, setInputField] = useState([
    {firstName: '', lastName: ''},
    {firstName: '', lastName: ''},
  ]);

  const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("InputField", inputFields);
  };

const handleChangeInput = (index,event) => {
const values = [...inputFields];
values[index][event.target.name] = event.target.value;
setInputField(values);
}

const handleAddFields =() => {
  setInputField([...inputFields,  {firstName: '', lastName: ''},])
} 
const handleRemoveFields =(index) => {
  const values =  [...inputFields];
  values.splice(index, 1);
setInputField(values);
}

return (
    <Container>
    <h1>Add New Member </h1>
    <form className={classes.root} onSubmit={handleSubmit}>
    { inputFields.map((inputField,index) => (
      <div key={index}>
      <TextField
      name="firstName"
      label="First Name"
      variant="filled"
      value={inputField.firstName}
      onChange={event => handleChangeInput(index,event)}
      />
       <TextField
      name="lastName"
      label="Last Name"
      variant="filled"
      value={inputField.lastName}
      onChange={event => handleChangeInput(index,event)}
      />
      <IconButton
        onClick={() => handleAddFields()}
        >
        <AddButton />
      </IconButton>
      <IconButton
        onClick={() => handleRemoveFields(index)}
        >
       <RemoveButton />
       </IconButton>
    </div> 
    )) }
    <Button 
    className = {classes.button}
     variant="contained"
     color="primary"
      type="submit"
      onClick={handleSubmit}
     > 
      send</Button>
    
    </form>
      
    </Container>
  );
}

export default App;
