import * as React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <MuiCard sx={{ cursor: 'pointer' }}>
      <MuiCardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          {description}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </MuiCardContent>
    </MuiCard>
  );
}
