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
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Task
            titleTask="KabanBoard"
            descriptionTask="Create a KabanBoard on React"
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
        }
        nameColumn="To Do"
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <ColumnKanbanBoard
        tasks={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Task
            titleTask="Calendar"
            descriptionTask="Create a Calendar on React"
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
        }
        nameColumn="In Progress"
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <ColumnKanbanBoard
        tasks={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Task
            titleTask="Calculator"
            descriptionTask="Create a Calculator on React"
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
        }
        nameColumn="In Pr"
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <ColumnKanbanBoard nameColumn="In Testing" />
      <ColumnKanbanBoard nameColumn="Done" />
    </div>
  );
}

export default KanbanBoard;
