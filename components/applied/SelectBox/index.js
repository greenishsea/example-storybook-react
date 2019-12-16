import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block'
  },
  selectStyle: {
    fontSize: '1.8rem'
  }
}))

export default function SelectBox(props) {
  const classes = useStyles()
  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          {props.label}
        </InputLabel>
        <Select
          native
          value={props.activeValue}
          onChange={props.onChange}
          className={classes.selectStyle}
          input={
            <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
          }
        >
          { props.needsEmptyOption &&
            <option key={0} value="" />
          }
          {
            props.data && props.data.map((m, i) => 
              <option key={i + 1} value={m.id}>{m.name}</option>
            )
          }
        </Select>
      </FormControl>
    </div>
  )
}
