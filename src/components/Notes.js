import React from "react";
import dayjs from 'dayjs';
import { TransitionGroup, CSSTransition } from "react-transition-group";

//dayjs.format();

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {Array.from(notes).map((note) => (
      <CSSTransition key={note.id} classNames={'note'} timeout={800}>
        <li className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small>{dayjs(note.date).format('DD.MM.YYYY')}</small>
          </div>
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
