import { Typography } from '@mui/material'
import React from 'react'

type THeading = {
    headingText: string
}

const Heading = ({headingText}: THeading) => {
  return (
    <Typography variant='h3' mt={2} >{headingText}</Typography>
  )
}

export default Heading;