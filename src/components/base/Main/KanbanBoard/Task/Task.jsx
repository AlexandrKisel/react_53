/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import HeaderTask from './HeaderTask';
import DescriptionTask from './DescriptionTask';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Task(props) {
  return (
    <div className={classes.task}>
      <HeaderTask titleTask={props.titleTask} />
      <DescriptionTask descriptionTask={props.descriptionTask} />
    </div>
  );
}

export default Task;
