import AuthLayout from "./_auth/AuthLayout"
import { SingUpForm } from "./_auth/Form/Sign-Up";
import { SingInForm } from "./_auth/Form/SignIn";

import Home from "./_root/pages/Home";
import RootLayout from "./_root/pages/RootLayout"
import { Route,Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

function App() {
    return (
      <>
        <Routes>
              <Route element={<AuthLayout />}>
                  <Route path={"/sign-in"} element={<SingInForm />} />
                  <Route path={"/sign-up"} element={<SingUpForm />} />
              </Route>

              <Route element={<RootLayout />}>
                  <Route index element={<Home />} />
              </Route>
        </Routes>
        <Toaster />
      </>
    )
}

export default App
