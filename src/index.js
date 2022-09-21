import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateEvent from './components/CreateEvent/CreateEvent';
import Event from './components/Event/Event';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<CreateEvent />} />
      <Route path="event" element={<Event />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  rootElement
);