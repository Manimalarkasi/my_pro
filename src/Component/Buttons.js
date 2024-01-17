import { Button, Stack } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Block } from '@mui/icons-material';


function Buttonsmui() {
  return (
    <div>
      <h3>mui - button component</h3><br />
      <b>text veriant</b><br />
      <Button variant='text'>text variant button</Button><br /><hr />
      <b>contained variant</b><br />
      <Button variant='contained'>contained variant button</Button><br /><hr />
      <b>outlined variant</b><br />
      <Button variant='outlined'>contained variant button</Button><br /><hr />
      <b>stack component</b>
      <Stack spacing={2} direction='row'>
      <Button variant='text' href='https://www.youtube.com/watch?v=fgTLgz1xSn8&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=4'>
        text variant button</Button>
      <Button variant='contained'>contained variant button</Button>
      <Button variant='outlined'>contained variant button</Button>
      </Stack>
      <hr />
      <b>button color</b>
      <div>
      <Button variant='contained' color='primary'>primary color</Button><br />
       <Button variant='contained' color='secondary'>secondary color</Button><br />
       <Button variant='contained' color='error'>error color</Button><br />
       <Button variant='contained' color='info'>info color</Button><br />
       <Button variant='contained' color='success'>success color</Button><br />
       <Button variant='contained' color='warning'>warning color</Button><br />
      </div>
      <b>contained button</b>
      <Stack spacing={2} direction='column'>
       <Button variant='contained' color='primary'>primary color</Button><br />
       <Button variant='contained' color='secondary'>secondary color</Button><br />
       <Button variant='contained' color='error'>error color</Button><br />
       <Button variant='contained' color='info'>info color</Button><br />
       <Button variant='contained' color='success'>success color</Button><br />
       <Button variant='contained' color='warning'>warning color</Button><br />
      </Stack><br /><hr />
      <b>text button</b>
      <Stack spacing={2} direction='column'><br />
       <Button variant='text' color='primary'>primary color</Button><br />
       <Button variant='text' color='secondary'>secondary color</Button><br />
       <Button variant='text' color='error'>error color</Button><br />
       <Button variant='text' color='info'>info color</Button><br />
       <Button variant='text' color='success'>success color</Button><br />
       <Button variant='text' color='warning'>warning color</Button><br />
      </Stack><br /><hr />
      <b>outlined button</b>
      <Stack spacing={2} direction='column'>
       <Button variant='outlined' color='primary'>primary color</Button>
       <Button variant='outlined' color='secondary'>secondary color</Button>
       <Button variant='outlined' color='error'>error color</Button><br />
       <Button variant='outlined' color='info'>info color</Button><br />
       <Button variant='outlined' color='success'>success color</Button><br />
       <Button variant='outlined' color='warning'>warning color</Button><br />
      </Stack><br /><hr />
      <b>set size for button</b>
      <Stack spacing={2} direction='column' display='block'>
      <Button variant='contained' color='primary' size='large'>large</Button><br />
       <Button variant='contained' color='secondary' size='medium'>medium</Button><br />
       <Button variant='contained' color='error' size='small'>small</Button><br />
       </Stack><br /><hr />
       <b>set button</b>
       <Stack spacing={2} direction='column'>
        <Button variant='contained' startIcon={<SendIcon />} >send</Button>
        <Button variant='contained' endIcon={<SendIcon />} >send</Button>
       </Stack><br /><hr />
    </div>
  )
}

export default Buttonsmui