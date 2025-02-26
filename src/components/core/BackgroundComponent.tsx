import { Box } from "@mui/material";
import { TBackgroundComponent } from "../../types/BackgroundComponent.types";

const BackgroundComponent = ({ src, children }: TBackgroundComponent) => {
    return (
        <Box 
            component="div" 
            sx={{
                width: '100vw',
                height: 'calc(100vw)',
                background: `url(${src}) center center`,
                backgroundSize: 'cover'
        }}>
            {children}
        </Box>
    )
}

export default BackgroundComponent;