import { Button } from '@mui/material';
import { TCoreButton } from '../../types/CoreButton.types';

const CoreButton = ({ text, type = 'cta', icon }: TCoreButton) => {
  return type === 'cta' ? (
    <Button variant="contained" sx={{ marginBottom: 2, marginTop: 1 }} endIcon={<>{icon}</>}>
      {text}
    </Button>
  ) : null;
};

export default CoreButton;
