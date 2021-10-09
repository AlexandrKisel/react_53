/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function HeaderTask(props) {
  return (
    <div className={classes.headerTask}>
      <div className={classes.titleTask}>{props.titleTask}</div>
      <img
        className={classes.imgDeleteTask}
        alt="delete task"
        src="https://www.iconattitude.com/icons/open_icon_library/actions/png/256/window-close.png"
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
    </div>
  );
}

export default HeaderTask;
