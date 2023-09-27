import { Add, Remove } from '@mui/icons-material';
import { Button, FormControl, IconButton, MenuItem, OutlinedInput, Select, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Flow1Step4({ data, handleChangeRB1, handleChangeRB2, nextStep }) {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const menuItemStyle = {
    padding: '6px 12px',
    fontSize: '14px',
  };

  const selectStyle = {
    fontSize: '14px',
  };

  const colorOptions = [
    { label: 'White - Бела', value: '#FFFFFF' },
    { label: 'Black - Црна', value: '#000000' },
    { label: 'Navy Blue - Темносина', value: '#000080' },
    { label: 'Royal Blue - Кралско сина', value: '#4169E1' },
    { label: 'Light Blue - Светлосина', value: '#ADD8E6' },
    { label: 'Baby Blue - Бебешка сина', value: '#89CFF0' },
    { label: 'Teal - Тил', value: '#008080' },
    { label: 'Turquoise - Тиркизна', value: '#40E0D0' },
    { label: 'Aqua - Аква', value: '#00FFFF' },
    { label: 'Mint Green - Ментол зелена', value: '#98FF98' },
    { label: 'Forest Green - Шумско зелена', value: '#228B22' },
    { label: 'Olive Green - Маслиново зелена', value: '#808000' },
    { label: 'Lime Green - Лимонозелена', value: '#00FF00' },
    { label: 'Yellow - Жолта', value: '#FFFF00' },
    { label: 'Mustard Yellow - Сенфжолта', value: '#FFDB58' },
    { label: 'Gold - Златно', value: '#FFD700' },
    { label: 'Orange - Портокалова', value: '#FFA500' },
    { label: 'Coral - Корал', value: '#FF7F50' },
    { label: 'Pink - Розова', value: '#FFC0CB' },
    { label: 'Hot Pink - Виолетоворозева', value: '#FF69B4' },
    { label: 'Red - Црвена', value: '#FF0000' },
    { label: 'Maroon - Темноцрвена', value: '#800000' },
    { label: 'Wine - Вино', value: '#722F37' },
    { label: 'Purple - Пурпурно', value: '#800080' },
    { label: 'Lavender - Лавандула', value: '#E6E6FA' },
    { label: 'Indigo - Индиго', value: '#4B0082' },
    { label: 'Violet - Виолетово', value: '#EE82EE' },
    { label: 'Beige - Беж', value: '#F5F5DC' },
    { label: 'Bronze - Бронзено', value: '#D2691E' },
    { label: 'Khaki - Хаки', value: '#C3B091' },
    { label: 'Cream - Крем', value: '#FFFDD0' },
    { label: 'Slate Gray - Сива', value: '#708090' },
    { label: 'Silver - Сребро', value: '#C0C0C0' },
    { label: 'Brown - Кафена', value: '#B87333' },
    { label: 'Mauve - Мов', value: '#E0B0FF' },
    { label: 'Peach - Праска', value: '#FFDAB9' },
    { label: 'Sky Blue - Небесносина', value: '#87CEEB' },
    { label: 'Magenta - Магента', value: '#FF00FF' }
  ]

  // Function to add a new row
  const addRow = () => {
    setRows([...rows, { color: '', size: '', quantity: 1 }]); // Add a new row with quantity 1
  };

  // Function to handle cell value changes
  const handleCellValueChange = (e, rowIndex, columnName) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][columnName] = e.target.value;
    setRows(updatedRows);
  };

  const [rows, setRows] = useState([{ color: '', size: '', quantity: 1 }]); // Initial row with quantity 1

  // Function to increment the quantity
  const incrementQuantity = (rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].quantity += 1;
    setRows(updatedRows);
  };

  // Function to decrement the quantity
  const decrementQuantity = (rowIndex) => {
    const updatedRows = [...rows];
    if (updatedRows[rowIndex].quantity > 1) {
      updatedRows[rowIndex].quantity -= 1;
      setRows(updatedRows);
    }
  };

  return (
    <div>
      <Stack alignItems='center' style={{ padding: '40px' }}>
        <Button variant='contained' size='small' style={{ textTransform: 'none', marginBottom: "20px" }}>
          Прикачи нова серија на веб страна.
        </Button>
        <Typography variant='subtitle2' marginBottom="60px" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Чекор 4 - Селектирај комбинации од серија.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ border: '1px solid #000', textAlign: 'center' }}>Боја</TableCell>
              <TableCell style={{ border: '1px solid #000', textAlign: 'center' }}>Големина</TableCell>
              <TableCell style={{ border: '1px solid #000', textAlign: 'center' }}>Парчиња</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell style={{ border: '1px solid #000', textAlign: 'center' }}>
                  <FormControl>
                    <Select
                      size="small"
                      value={row.color}
                      onChange={(e) => handleCellValueChange(e, rowIndex, 'color')}
                      displayEmpty
                      style={selectStyle}
                      renderValue={(selected) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{ backgroundColor: selected, border: '1px solid #000', width: '20px', height: '20px', marginRight: '8px' }}></div>
                          {colorOptions.find((option) => option.value === selected)?.label || ''}
                        </div>
                      )}>
                      {colorOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value} style={menuItemStyle}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: '1px solid #000', textAlign: 'center' }}>
                  <FormControl>
                    <Select
                      size="small"
                      value={row.size}
                      onChange={(e) => handleCellValueChange(e, rowIndex, 'size')}
                      displayEmpty
                      style={selectStyle}
                      renderValue={(selected) => selected || ''}
                    >
                      <MenuItem value="36" style={menuItemStyle}>36</MenuItem>
                      <MenuItem value="38" style={menuItemStyle}>38</MenuItem>
                      <MenuItem value="40" style={menuItemStyle}>40</MenuItem>
                      <MenuItem value="42" style={menuItemStyle}>42</MenuItem>
                      <MenuItem value="44" style={menuItemStyle}>44</MenuItem>
                      <MenuItem value="46" style={menuItemStyle}>46</MenuItem>
                      <MenuItem value="48" style={menuItemStyle}>48</MenuItem>
                      <MenuItem value="50" style={menuItemStyle}>50</MenuItem>
                      <MenuItem value="52" style={menuItemStyle}>52</MenuItem>
                      <MenuItem value="XS" style={menuItemStyle}>XS</MenuItem>
                      <MenuItem value="S" style={menuItemStyle}>S</MenuItem>
                      <MenuItem value="M" style={menuItemStyle}>M</MenuItem>
                      <MenuItem value="L" style={menuItemStyle}>L</MenuItem>
                      <MenuItem value="XL" style={menuItemStyle}>XL</MenuItem>
                      <MenuItem value="XXL" style={menuItemStyle}>XXL</MenuItem>
                      <MenuItem value="XXXL" style={menuItemStyle}>XXXL</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: '1px solid #000', textAlign: 'center' }}>
                  <FormControl>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => decrementQuantity(rowIndex)} size='small' disabled={row.quantity <= 1}>
                        <Remove />
                      </IconButton>
                      <OutlinedInput value={row.quantity} readOnly size='small' style={{ width: '36px', textAlign: 'center' }} />
                      <IconButton onClick={() => incrementQuantity(rowIndex)} size='small'>
                        <Add />
                      </IconButton>
                    </div>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" color="info" onClick={addRow} style={{ textTransform: 'none', marginTop: "6px" }}>
          Додај Ред
        </Button>
        <Button variant='contained' color='success' onClick={nextStep} style={{ width: 'auto', marginTop: '40px', marginBottom: '80px' }}>
          Прикачи
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

export default Flow1Step4;
