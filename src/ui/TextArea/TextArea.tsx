import TextField, { TextFieldProps } from '@mui/material/TextField';

type TextAreaProps = {
  value?: TextFieldProps['value'];
  onChange?: TextFieldProps['onChange'];
};

function TextArea(props: TextAreaProps) {
  return (
    <TextField
      {...props}
      multiline
      maxRows={4}
      minRows={2}
      className="w-full"
    />
  );
}

export { TextArea };
