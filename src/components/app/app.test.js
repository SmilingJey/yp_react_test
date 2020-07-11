import React from 'react'
import renderer from 'react-test-renderer'
import App from './app'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducers";

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

/*
  Снапшот тестирует только главную страницу. 
  Нужно использовать MemoryRouter для тестирования всех роутов. 

  Лучше делать снепшоты отдельных компонент а не всего дерева т.к. тесты сейчас 
  будет падать при изменении любого отображаемого компонента, для этого можно 
  воспользоваться react-test-renderer/shallow
*/
it('renders without crashing', () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
})
