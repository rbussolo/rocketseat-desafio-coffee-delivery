import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function Router() {
  return(
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/success" Component={Success} />
      </Route>
    </Routes>
  )
}