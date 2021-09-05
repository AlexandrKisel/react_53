/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function DescriptionTask(props) {
  return <div className={classes.descriptionTask}>{props.descriptionTask}</div>;
}

export default DescriptionTask;
