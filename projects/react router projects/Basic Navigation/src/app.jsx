// import router dom lirary
import {
  createBrowserRouter,
  routerProvider,
  Router,
  createRoutesFromElements,
} from "react-router-dom";

// create router function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<HelpLayout />}>
        <Route index element={<Help />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function app() {
  return <RouterProvider router={router}></RouterProvider>;
}
