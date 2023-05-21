import React from 'react';
import { Route } from 'react-router-dom';
import { CustomRouteObj } from './type';

export const routeManager = (route: CustomRouteObj, idx: number) => {
  if (!route.children) {
    return <Route key={idx} element={route.element} path={route.path} />;
  }

  return (
    <React.Fragment key={idx}>
      <Route element={route.element}>
        {route.children.map((route, idx) => {
          return routeManager(route, idx);
        })}
      </Route>
    </React.Fragment>
  );
};
