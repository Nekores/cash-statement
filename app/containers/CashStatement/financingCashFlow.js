import React from 'react';
import Widget from '../../components/Widget';
import TableInput from '../../components/TableInput';
import TableRow from '../../components/TableRow';

import useStyles from './styles';

export default function FinancingCashFlow() {
  const classes = useStyles();
  return (
    <Widget>
      <Widget className={classes.header}>
        <h3 className={classes.header_title}>Financing Cash Flow</h3>
        <TableRow
          className={`${classes.header_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.header_cell} />
        <TableRow className={classes.header_cell} />
        <TableRow className={classes.header_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Paid in/Paid out</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="fcf1" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="fcf2" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="fcf3" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Dividends</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="fcf4" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="fcf5" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="fcf6" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.body}>
        <h4 className={classes.body_title}>Borrow/Payback</h4>
        <TableRow className={`${classes.body_cell} ${classes.bdrLeft_none}`}>
          <TableInput id="fcf7" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="fcf8" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell}>
          <TableInput id="fcf9" dollor="$" />
        </TableRow>
        <TableRow className={classes.body_cell_last} />
      </Widget>
      <Widget className={classes.footer}>
        <h4 className={classes.footer_title}>Total Financing Cash Flow</h4>
        <TableRow
          className={`${classes.footer_cell} ${classes.bdrLeft_none}`}
        />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell} />
        <TableRow className={classes.footer_cell_last}>
          <TableInput id="fcf10" dollor="$" />
        </TableRow>
      </Widget>
    </Widget>
  );
}
