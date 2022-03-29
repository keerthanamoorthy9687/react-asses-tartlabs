import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "../App";

const middlewares = [thunk];

describe("TartLabs Testing Library", () => {
  const initialState = { app: { posts: [], post: {}, loading: false } };
  const mockStore = configureStore(middlewares);
  let store;

  it('app - snapshot testing"', () => {
    store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
