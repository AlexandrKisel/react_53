import React from 'react';
import { Link } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import routes from '../../../configs/routes';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <div className={classes.side}>
      <ul>
        {routes.map((item) =>
          item.show ? (
            <li key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ) : (
            'error'
          ),
        )}
      </ul>
    </div>
  );
}

export default Side;
