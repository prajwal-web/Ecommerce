import { Typography, Box } from "@mui/material";
import { TMarketingComponent } from "../../types/MarketingComponent.types";
import theme from "../../theme";

const MarketingComponent = ({ text, type = "main_ghp", backgroundColor = 'secondary' }: TMarketingComponent) => {
    return (
        type === 'main_ghp' ? <Box sx={{
            background: theme.palette[backgroundColor].main,
            padding: '24px 12px'
        }}>
            <Typography variant="h3" sx={{ width: '180px' }}>{text}</Typography>
        </Box> : null
    )
}

export default MarketingComponent;
