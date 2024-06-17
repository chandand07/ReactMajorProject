import "./layout.scss"
import "./components/navbar/Navbar"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/homePage"
import {createBrowserRouter , RouterProvider , Route , Link} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:(
      <HomePage/>
    )
    },
    {
      path: "/list",
      element: <ListPage/>
    }
  ]);
  return (
    // <div className="layout">
    //   <div className="navbaar">
    //   <Navbar/>
    //   </div>
    //   <div className="content">
    //   <HomePage/>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App