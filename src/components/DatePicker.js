import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}


// Cannot use the following code because it requires access to pro-packages.

// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import DateRangePicker  from '@mui/x-date-pickers-pro/DateRangePicker';

// export default function DateRangePickerValue() {
//   const [value, setValue] = React.useState([
//     dayjs('2022-04-17'),
//     dayjs('2022-04-21'),
//   ]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
//         <DemoItem label="Uncontrolled picker" component="DateRangePicker">
//           <DateRangePicker
//             defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
//           />
//         </DemoItem>
//         <DemoItem label="Controlled picker" component="DateRangePicker">
//           <DateRangePicker
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//           />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }