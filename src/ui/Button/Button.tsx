import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = MuiButtonProps;

function Button(props: React.PropsWithChildren<ButtonProps>) {
  return <MuiButton {...props} variant="contained" className="w-full" />;
}

export { Button };
