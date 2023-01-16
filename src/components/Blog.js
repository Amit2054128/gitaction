import React from 'react'
import Nav from './Nav'
import { Alert, AlertTitle, Avatar, Button, TextField } from '@mui/material'
import { Container } from '@mui/system'
import { deepOrange } from '@mui/material/colors'


export default function Blog() {
  return (
    <>
    <Container>
        <Button variant='outlined' color='primary'
        >click</Button>
        <TextField
          id=""
          label="Username"
          variant='outlined'
          size='small'
          sx={{justifyContent:'center',}}          
        />
          <Avatar
            sx={{ bgcolor:deepOrange[500] }} >A</Avatar>
            <Avatar src='https://st1.bollywoodlife.com/wp-content/uploads/2021/09/Nora-Fatehii.jpg'
              sx={{ width: 100, height:100 }}
              alt ='noora fatehi'
              
            />
            <Alert severity='success'>
              <AlertTitle>success</AlertTitle>
              product Added <strong>Success</strong>
            </Alert>

        </Container>
    </>
  )
}
