/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import ColumnKanbanBoard from './ColumnKanbanBoard';
import Task from './Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function KanbanBoard() {
  return (
    <div className={classes.kanbanBoard}>
      <ColumnKanbanBoard
        tasks={
          <Task
            titleTask="KanbanBoard"
            descriptionTask="Create a KanbanBoard on React"
          />
        }
        nameColumn="To Do"
      />
      <ColumnKanbanBoard
        tasks={
          <Task
            titleTask="Calendar"
            descriptionTask="Create a Calendar on React"
          />
        }
        nameColumn="In Progress"
      />
      <ColumnKanbanBoard
        tasks={
          <Task
            titleTask="Calculator"
            descriptionTask="Create a Calculator on React"
          />
        }
        nameColumn="In Pr"
      />
      <ColumnKanbanBoard nameColumn="In Testing" />
      <ColumnKanbanBoard nameColumn="Done" />
    </div>
  );
}

export default KanbanBoard;
