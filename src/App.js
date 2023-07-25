import { Routes, Route } from 'react-router-dom';
import { Header, Login, Logout, Register } from "./components";
import { UserContext } from "./utils";

export const App = () => {

    return (
      <UserContext.UserContextProvider>
          <Header />
              <Routes>
                  <Route path={'/'} element={<h2>Login</h2>} />
                  <Route path={'/register'} element={<Register />} />
                  <Route path={'/login'} element={<Login />} />
                  <Route path={'/logout'} element={<Logout />} />
                  <Route path={'*'} element={<h2>Not found Page</h2>} />
              </Routes>
      </UserContext.UserContextProvider>
  );
}