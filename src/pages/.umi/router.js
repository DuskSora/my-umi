import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../Layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('../HelloWorld').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('../DashBoard/Analysis.js').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('../DashBoard/Monitor.js').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('../DashBoard/Workplace.js').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/Development/Workspaces/Projects/my-umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/puzzlecards",
        "component": require('../PuzzleCards').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/Development/Workspaces/Projects/my-umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/Development/Workspaces/Projects/my-umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
