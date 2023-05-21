import React from 'react';
import { Routes } from 'react-router-dom';
import { routeManager } from './manager';
import { routes } from './routes';

export const MainRouter = () => {
  return (
    <Routes>
      {routes.map((route, idx) => {
        return <React.Fragment key={idx}>{routeManager(route, idx)}</React.Fragment>;
      })}
    </Routes>
  );
};
