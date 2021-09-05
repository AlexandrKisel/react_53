/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import HeaderColumn from './HeaderColumn';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function ColumnKanbanBoard(props) {
  return (
    <div className={classes.columnKanbanBoard}>
      <HeaderColumn titleHeaderColumn={props.nameColumn} />
      {props.tasks}
    </div>
  );
}

export default ColumnKanbanBoard;
