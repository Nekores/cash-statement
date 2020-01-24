/**
 *
 * Input
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input_box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'safe',
    paddingRight: '10px',
    '@media (max-width: 576px)': {
      paddingRight: '6px',
    },
  },
  input_style: {
    border: 'none',
    // borderBottom: '1px solid #000 ',
    background: 'transparent',
    paddingLeft: '22px',
    paddingBottom: '15px',
    width: '187px',
    '&:focus': {
      outline: 'none',
    },
    '@media (max-width: 576px)': {
      width: '95px',
      paddingBottom: '2px',
      paddingLeft: '14px',
      fontSize: '12px',
    },
  },
  dollor: {
    position: 'relative',
    left: 16,
    fontSize: '24px',
    color: '#000',
    paddingBottom: '18px',
    '@media (max-width: 576px)': {
      fontSize: '12px',
      left: 11,
      paddingBottom: '0',
    },
  },
}));

function TableInput(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.input_box} ${props.inputClass}`}>
      <p className={classes.dollor}>{props.dollor}</p>
      <input
        className={`${props.className} ${classes.input_style}`}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

TableInput.propTypes = {};

export default TableInput;