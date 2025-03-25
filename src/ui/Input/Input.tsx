import TextField, { TextFieldProps } from '@mui/material/TextField';

export type InputProps = {
  type?: TextFieldProps['type'];
  placeholder?: TextFieldProps['placeholder'];
  value?: TextFieldProps['value'];
  onChange?: TextFieldProps['onChange'];
};

function Input(props: React.PropsWithChildren<InputProps>) {
  return <TextField {...props} size="small" className="w-full" />;
}

export { Input };
