import './App.css';
import Header from "./Component/Header/Header";
import BestSellers from "./Component/BestSellers/BestSellers";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./Component/Product/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers/>,
    },
    {
        path: "/product/:productId",
        element: <Product/>
    }
])

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
