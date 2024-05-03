import { Route, Routes } from "react-router-dom";
import { RouteElement } from "./components/routes/RouteElement";
import { AuthProvider } from "./contexts/auth";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import SignupPage from "./pages/signup";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/login"
          index={true}
          element={<RouteElement element={<LoginPage />} isProtected={false} />}
        />
        <Route
          path="/signup"
          element={
            <RouteElement element={<SignupPage />} isProtected={false} />
          }
        />
        <Route
          path="/profile"
          element={
            <RouteElement element={<ProfilePage />} isProtected={true} />
          }
        />
        <Route
          path="/*"
          element={
            <RouteElement element={<ProfilePage />} isProtected={true} />
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
