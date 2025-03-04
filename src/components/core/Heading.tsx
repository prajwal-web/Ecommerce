import { Typography } from '@mui/material'

type THeading = {
    headingText: string
}

const Heading = ({headingText}: THeading) => {
  return (
    <Typography variant='h3' mt={{xs: 2, lg: 4}} ml={{lg: 2}} fontSize={{lg: '20px'}} >{headingText}</Typography>
  )
}

export default Heading;