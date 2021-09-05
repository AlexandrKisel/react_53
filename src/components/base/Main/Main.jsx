import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import KanbanBoard from './KanbanBoard';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      Main
      <KanbanBoard />
    </div>
  );
}

export default Main;
