import MuiSelect from '@mui/material/Select';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface SelectOption {
  value: string;
  label: string;
}

type SelectProps = MuiSelectProps & {
  options?: SelectOption[];
};

function Select({ options, ...props }: SelectProps) {
  return (
    <MuiSelect size="small" className="w-full" {...props}>
      {options?.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
}

export { Select };
