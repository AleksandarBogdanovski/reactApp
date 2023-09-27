import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Flow1Step3({ data, handleChangeRB2, nextStep }) {
  // return (
  //   <div>
  //     <h2>Step 3: Enter Type</h2>
  //     <input
  //       type="text"
  //       value={data.type}
  //       onChange={(e) => handleChange('type', e.target.value)}
  //     />
  //     <button onClick={nextStep}>Next</button>
  //   </div>
  // );


  const navigate = useNavigate();
  const [formattedValue, setFormattedValue] = useState(data.regular_price || '');

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleValueChange = (event) => {
    // Remove non-numeric characters
    const rawValue = event.target.value.replace(/[^0-9]/g, '');

    // Limit the value to a maximum of 999999
    const intValue = parseInt(rawValue, 10);
    if (!isNaN(intValue)) {
      const newFormattedValue = intValue.toLocaleString('en-US');
      setFormattedValue(newFormattedValue);

      // Call handleChange from the parent component with 'price' and the updated value
      handleChangeRB2('regular_price', newFormattedValue);
    }
  };

  return (
    <div>
      <Stack alignItems='center' style={{ padding: '40px' }}>
        <Button variant='contained' size='small' style={{ textTransform: 'none', marginBottom: "20px" }}>
          Прикачи нова серија на веб страна.
        </Button>
        <Typography variant='subtitle2' marginBottom="60px" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Чекор 3 - Внеси цена на модел.
        </Typography>
        <TextField variant="outlined" type="text" value={formattedValue} onChange={handleValueChange} inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+(,[0-9]{1,3})?$' }} />
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

export default Flow1Step3;
