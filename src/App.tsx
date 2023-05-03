import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth as authFirebase } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { authStateCheckAction } from "./store/auth/reducer";
import { authStateSelector } from "./store/auth/selector";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(authStateSelector);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        dispatch(authStateCheckAction(user));
      } else {
        authStateCheckAction({});
      }
    });
  }, [user, dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              Object.entries(user).length ? <Home /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
