import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';

// const SliderComponent = (props) => {
//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider defaultValue={props.defaultValue} max={props.max} min={props.min} aria-label="Default" valueLabelDisplay="auto" />
//     </Box>
//   )
// }


// Props Destructuring
const SliderComponent = ({ defaultValue, max, min, step, value, onChange, label, unit }) => {
  return (
    <>
      {/* <Box sx={{ width: 300 }}> */}
      <Typography variant='subtitle2' mb={2} mt={2}>{label}</Typography>
      <Typography variant='h6'>{unit} {value}</Typography>
      <Slider
        defaultValue={defaultValue}
        max={max}
        min={min}
        marks
        step={step}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value} />
      <Stack direction="row" justifyContent='space-between'>
        <Typography color='text.secondary' variant="caption">{unit} {min}</Typography>
        <Typography color='text.secondary' variant="caption">{unit} {max}</Typography>
      </Stack>
      {/* </Box> */}
    </>
  )
}

export default SliderComponent