import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  
  const classes = useStyles();
  const [period, setPeriod] = useState('');
  const [average, setAverage] = useState('');

  const handleChange = (event) => {

    console.log(event.target.value);
  
      if (event.target.value == 1){
        axios.post("http://127.0.0.1:8000/api/auth/average", {
            period:'d',
          })
          .then((response) => {
            console.log(response.data.average);
            setAverage(response.data.average);
          });
        
        }
        if (event.target.value == 2){
            axios.post("http://127.0.0.1:8000/api/auth/average", {
                period:'m',
              })
              .then((response) => {
                console.log(response.data.average);
                setAverage(response.data.average);

              });
              setPeriod("");
          }
          if (event.target.value == 3){
            axios.post("http://127.0.0.1:8000/api/auth/average", {
                period:'m',
              })
              .then((response) => {
                console.log(response.data.average);
                setAverage(response.data.average);
              });
             
          }
          if (event.target.value == 4){
            axios.post("http://127.0.0.1:8000/api/auth/average", {
                period:'y',
              })
              .then((response) => {
                console.log(response.data.average);
                setAverage(response.data.average);
              });
              
          }
  
  
  };

  return (
    <div>
         <h2>the average number of registrations within  a
specific period </h2>
      <FormControl className={classes.formControl}>
         
        <InputLabel htmlFor="period-native-simple">Period</InputLabel>
        <Select
          native
          fullWidth
          value={period}
          onChange={handleChange}
          inputProps={{
            name: 'period',
            id: 'period-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1} >Last 24 hours</option>
          <option value={2}>Last one Month</option>
          <option value={3}>Last 3 Months</option>
          <option value={4}>Last year</option>
        </Select>
      </FormControl>
     <div></div>
        <Input  value={average}></Input>
    </div>
  );
}
