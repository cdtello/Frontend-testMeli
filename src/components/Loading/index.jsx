import React from "react";
import "@styles/Loading.scss";

function Loading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando ...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { Loading };
