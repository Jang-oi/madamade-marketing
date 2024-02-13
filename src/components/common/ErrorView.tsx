import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/joy';

interface ErrorProps {
  code: string;
  message?: string;
  buttonValue? : string;
  buttonCallBack? : () => void;
}

export default function ErrorView({ code, message, buttonValue, buttonCallBack }: ErrorProps) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
      }}
    >
      <Typography level={'h1'} variant="plain" color="neutral">
        {code}
      </Typography>
      <Typography level={'h2'} variant="plain" color="neutral">
        {message}
      </Typography>
      <Button
        sx={{ marginTop: '30px' }}
        color={'primary'}
        variant={'soft'}
        onClick={() => {
            if (buttonCallBack) buttonCallBack();
            else navigate('/');
        }}
      >
          {buttonValue || '메인으로'}
      </Button>
    </Box>
  );
}
