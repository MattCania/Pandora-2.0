import React from 'react';
import { Container, Typography } from '@mui/material';

export default function CapturePage () {
	return (
	  <Container maxWidth="lg" sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
		<Typography variant="h3" align="center" gutterBottom>
		  Hello, World!
		</Typography>
		<Typography variant="body1" align="center">
		  This is a simple container using Material UI and TypeScript.
		</Typography>
	  </Container>
	);
  };
  