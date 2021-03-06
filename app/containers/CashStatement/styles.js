import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table_container: {
    marginBottom: '2rem',
    border: '1px solid #000',
    borderBottom: 0,
    background: '#caf6cc',
    padding: 0,
  },
  cash_statement_table: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #000',
    '@media (max-width: 576px)': {
      height: '50px',
    },
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '2rem',
    '@media (max-width: 576px)': {
      fontSize: '1.3rem',
    },
  },
  date_box_one: {
    display: 'flex',
    width: '402px',
    height: '100px',
    justifyContent: 'start',
    alignItems: 'center',
    borderRight: '1px solid #868686',
    paddingLeft: '10px',
    '@media (max-width: 1024px)': {
      width: '345px',
      height: '95px',
    },
    '@media (max-width: 768px)': {
      width: '257px',
      height: '85px',
    },
    '@media (max-width: 576px)': {
      flexDirection: 'row',
      alignItems: 'start',
      paddingTop: '9px',
      flexBasis: '35%',
      height: '50px',
    },
  },
  date_box_two: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '500px',
    '@media (max-width: 1024px)': {
      paddingLeft: '10px',
      paddingLeft: '10px',
    },
    '@media (max-width: 768px)': {
      paddingLeft: '10px',
    },
    '@media (max-width: 576px)': {
      flexBasis: '65%',
    },
  },
  beginning_date: {
    margin: 0,
    fontSize: '16px',
    textTransform: 'capitalize',
    '@media (max-width: 576px)': {
      fontSize: '10px',
      paddingLeft: '0',
    },
  },
  end_date: {
    fontSize: '16px',
    margin: 0,
    textTransform: 'capitalize',
    '@media (max-width: 576px)': {
      fontSize: '10px',
    },
  },
  end_date_input: {
    marginleft: '6px',
    paddingLeft: '20px',
  },
  full_width: {
    width: '100%',
  },
  divider: {
    border: '.5px solid #000',
  },
  header: {
    display: 'flex',
    borderBottom: '.5px solid #868686',
  },
  footer: {
    display: 'flex',
    borderBottom: '1px solid #000',
  },
  body: {
    display: 'flex',
    borderBottom: '1px solid #868686',
    background: '#caf6cc',
  },
  header_title: {
    paddingLeft: '10px',
    width: '402px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    borderRight: '1px solid #868686',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'capitalize',
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width: 576px)': {
      fontSize: '9px',
      flexBasis: '35%',
      paddingLeft: '5px',
      height: '33px',
    },
  },
  footer_title: {
    paddingLeft: '10px',
    width: '402px',
    fontWeight: 500,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    borderRight: '1px solid #868686',
    fontSize: '14px',
    '@media (max-width: 768px)': {
      width: '402px',
      fontSize: '1.1rem',
      height: '50px',
    },
    '@media (max-width: 576px)': {
      fontSize: '9px',
      flexBasis: '35%',
      height: '33px',
      paddingLeft: '5px',
    },
  },
  body_title: {
    paddingLeft: '10px',
    width: '402px',
    height: '72px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    borderRight: '1px solid #868686',
    fontSize: '14px',
    fontWeight: 400,
    '@media (max-width: 768px)': {
      height: '50px',
      fontSize: '1rem',
    },
    '@media (max-width: 576px)': {
      flexBasis: '35%',
      height: '33px',
      paddingLeft: '5px',
      fontSize: '10px',
    },
  },
  header_cell: {
    width: '30px',
    height: '20px',
    borderLeft: '1px solid #868686',
    width: '189px',
    height: '80px',
    '@media (max-width: 1024px)': {
      width: '188px',
    },
    '@media (max-width: 768px)': {
      width: '189px',
      height: '70px',
    },
    '@media (max-width: 576px)': {
      flexBasis: '16.25%',
      height: '33px',
    },
  },
  body_cell: {
    borderLeft: '1px solid #868686',
    width: '189px',
    height: '72px',
    background: '#fff',
    '@media (max-width: 1024px)': {
      width: '188px',
    },
    '@media (max-width: 768px)': {
      width: '189px',
      height: '50px',
    },
    '@media (max-width: 576px)': {
      flexBasis: '16.25%',
      height: '33px',
    },
  },
  footer_cell: {
    width: '30px',
    height: '20px',
    borderLeft: '1px solid #868686',
    width: '189px',
    height: '72px',
    '@media (max-width: 1024px)': {
      width: '188px',
    },
    '@media (max-width: 768px)': {
      height: '50px',
      width: '189px',
    },
    '@media (max-width: 576px)': {
      flexBasis: '16.25%',
      height: '33px',
    },
  },
  header_cell_last: {
    borderLeft: '1px solid #868686',
    borderTop: 0,
    borderRight: 0,
    width: '189px',
    height: '80px',
    // '@media (max-width: 1024px)': {
    //   width: '189px',
    // },
    '@media (max-width: 768px)': {
      height: '70px',
      width: '189px',
    },
    '@media (max-width: 576px)': {
      flexBasis: '16.25%',
      height: '33px',
    },
  },
  body_cell_last: {
    borderLeft: '1px solid #868686',
    borderTop: 0,
    borderRight: 0,
    width: '189px',
    height: '72px',
    '@media (max-width: 768px)': {
      height: '50px',
    },
    '@media (max-width: 576px)': {
      flexBasis: '16.25%',
      height: '33px',
    },
  },
  footer_cell_last: {
    borderLeft: '1px solid #868686',
    borderTop: 0,
    borderRight: 0,
    width: '309px',
    height: '72px',
    background: '#fff',
    '@media (max-width: 1024px)': {
      width: '189px',
    },
    '@media (max-width: 768px)': {
      height: '50px',
      width: '189px',
    },
    '@media (max-width: 576px)': {
      height: '33px',
      flexBasis: '16.25%',
    },
  },
  bdrLeft_none: {
    borderLeft: 'none',
  },
}));

export default useStyles;
