import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: (Todo[]),
  onDelete: (todoId: number) => void,
  onUpdate: (id: number, data: Partial<Todo>) => void;
  tempTodo: Todo | null,
  LoadTodoId: number[],
};

export const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  onUpdate,
  tempTodo,
  LoadTodoId,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    <TransitionGroup>
      {todos.map(todo => (
        <CSSTransition
          key={todo.id}
          timeout={300}
          classNames="item"
        >
          <TodoInfo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            LoadTodoId={LoadTodoId}
            onUpdate={onUpdate}
          />
        </CSSTransition>
      ))}

      {tempTodo && (
        <CSSTransition
          key={0}
          timeout={300}
          classNames="temp-item"
        >
          <TodoInfo
            todo={tempTodo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            LoadTodoId={LoadTodoId}
          />
        </CSSTransition>
      )}
    </TransitionGroup>
  </section>
);