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
            <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nora_Fatehi_at_the_trailer_launch_of_Batla_House.jpg/200px-Nora_Fatehi_at_the_trailer_launch_of_Batla_House.jpg'
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
