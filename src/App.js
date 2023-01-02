import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Attorneys from "./pages/Attorneys";
import ChooseAttorney from "./pages/help/ChooseAttorney";
import Contact from "./pages/help/Contact";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="attorneys" element={<Attorneys />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="choose-attorney" element={<ChooseAttorney />} />
        <Route
          path="contact"
          element={<Contact path="help/choose-attorney" />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
