import { Button } from '@mui/material'
import React, { JSX } from 'react'

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const FormButton = (props:ButtonProps): JSX.Element => {
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