import { Button, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Flow1Step2({ data, handleChangeRB1, nextStep }) {
  // return (
  //   <div>
  //     <h2>Step 2: Enter Name</h2>
  //     <input
  //       type="text"
  //       value={data.name}
  //       onChange={(e) => handleChange('name', e.target.value)}
  //     />
  //     <button onClick={nextStep}>Next</button>
  //   </div>
  // );  

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(data.name || ''); // Initialize selectedValue with data.name

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleTypeChange = (event) => {
    setSelectedValue(event.target.value);
    handleChangeRB1('name', event.target.value); // Call handleChange with 'name' and the selected value
  };

  return (
    <div>
      <Stack alignItems='center' style={{ padding: '40px' }}>
        <Button variant='contained' size='small' style={{ textTransform: 'none', marginBottom: "20px" }}>
          Прикачи нова серија на веб страна.
        </Button>
        <Typography variant='subtitle2' marginBottom="60px" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Чекор 2 - Селектирај тип на модел.
        </Typography>
        <FormControl fullWidth>
          <Select value={selectedValue} onChange={handleTypeChange}>
            <MenuItem value={'Blazer'}>Сако</MenuItem>
            <MenuItem value={'Blouse'}>Блуза</MenuItem>
            <MenuItem value={'Dress'}>Фустан</MenuItem>
            <MenuItem value={'Jacket'}>Јакна</MenuItem>
            <MenuItem value={'Jeans'}>Фармерки</MenuItem>
            <MenuItem value={'Jumpsuit'}>Комбилизон</MenuItem>
            <MenuItem value={'Shirt'}>Кошула</MenuItem>
            <MenuItem value={'Shorts'}>Кратки Панталони</MenuItem>
            <MenuItem value={'Skirt'}>Сукна</MenuItem>
            <MenuItem value={'Suit'}>Костум</MenuItem>
            <MenuItem value={'Top'}>Маица</MenuItem>
            <MenuItem value={'Trousers'}>Панталони</MenuItem>
            <MenuItem value={'Two-Piece'}>Комплет</MenuItem>
            <MenuItem value={'Vest'}>Елече</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained' color='success' onClick={nextStep} style={{ width: 'auto', marginTop: '40px', marginBottom: '80px' }}>
          Продолжи
        </Button>
        <Button onClick={handleGoBack} variant='contained' color="error" style={{ textTransform: 'none' }}>
          Чекор Назад
        </Button>
        <Link to="/" >
          <Button variant='contained' color='secondary' style={{ textTransform: 'none', width: 'auto', marginTop: '10px' }}>
            Почетна
          </Button>
        </Link>
      </Stack>
    </div>
  );
}

export default Flow1Step2;
