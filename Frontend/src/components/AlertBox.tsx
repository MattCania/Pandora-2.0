import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

type ErrorAlertProps = {
  type: AlertSeverity;
  title: string;
  text: string;
};

export default function ErrorAlert({ type, title, text,}: ErrorAlertProps) {

  const [backgroundColor, setBackgroundColor] = React.useState("primary.main")

  React.useEffect(() => {
    switch (type) {
      case "error":
        setBackgroundColor("#4a0a0a");
        break;
      case "success":
        setBackgroundColor("#003006");
        break;
      case "warning":
        setBackgroundColor("#594a00");
        break;
      case "info":
        setBackgroundColor("#0257c7");
        break;
      default:
        setBackgroundColor("primary.main");
    }
  }, [type]);

  return (
    <Stack sx={{ 
      display: 'flex', 
      width: '100%', 
      animation: 'slideDown 0.3s ease-in',
      '@keyframes slideDown': {
        from: { transform: 'translateY(-20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
      },
    }} 
      spacing={2}>
      <Alert 
        severity={type}
        sx={{
          backgroundColor: backgroundColor,
          color: 'text.primary'
        }}  
      >
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </Stack>
  );
}
