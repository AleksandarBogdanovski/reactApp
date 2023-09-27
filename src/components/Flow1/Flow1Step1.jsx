import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Flow1Step1({ data, handleChangeRB1, nextStep }) {
  // return (
  //   <div>
  //     <h2>Step 1: Enter SKU</h2>
  //     <input
  //       type="text"
  //       value={data.SKU}
  //       onChange={(e) => handleChange('SKU', e.target.value)}
  //     />
  //     <button onClick={nextStep}>Next</button>
  //   </div>
  // );

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Stack alignItems='center' style={{ padding: '40px' }}>
        <Button variant='contained' size='small' style={{ textTransform: 'none', marginBottom: "20px" }}>
          Прикачи нова серија на веб страна.
        </Button>
        <Typography variant='subtitle2' marginBottom="60px" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Чекор 1 - Скенирај SKU код.
        </Typography>
        <input
          type="text"
          value={data.sku}
          onChange={(e) => handleChangeRB1('sku', e.target.value)}
        />
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

export default Flow1Step1;
