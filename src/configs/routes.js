import KanbanBoard from '../components/pages/KanbanBoard';
import ContextExample from '../components/pages/ContextExample';
import Home from '../components/pages/Home';
import HooksExample from '../components/pages/HooksExample';
import Refs from '../components/pages/Refs';
import Users from '../components/pages/Users';

export default [
  {
    title: 'Home',
    url: '/',
    component: Home,
    show: true,
    exact: true,
  },
  {
    title: 'KanbanBoard',
    url: '/kanban',
    component: KanbanBoard,
    show: true,
  },
  {
    title: 'ContextExample',
    url: '/context',
    component: ContextExample,
    show: true,
  },
  {
    title: 'HooksExample',
    url: '/hooks',
    component: HooksExample,
    show: true,
  },
  {
    title: 'Refs',
    url: '/refs',
    component: Refs,
    show: true,
  },
  {
    title: 'Users',
    url: '/users',
    component: Users,
    show: true,
  },
];
