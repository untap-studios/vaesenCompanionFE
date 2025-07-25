import { Button } from '@mui/material'
import React from 'react'

const FormButton = (props) => {
  const {
    text,
    type = 'submit'
  } = props;
    return (
    <Button
      sx={{backgroundColor:'#fff'}}
      type={type}
    >
        {text}
    </Button>
  )
}

export default FormButton;