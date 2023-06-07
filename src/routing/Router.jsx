import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "../App/screens/Home";
import { Categories } from "../Categories/screens/Categories";
import { Category } from "../Categories/screens/Category";
import { Products } from "../Products/screens/Products";
import { Product } from "../Products/screens/Product";
import { Orders } from "../Orders/screens/Orders";
import { Order } from "../Orders/screens/Order";
import { Layout } from "../App/screens/Layout";
import Nav from "../components/Nav";

export const Router = () => {
  return (
    <BrowserRouter>
      {/*       <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path=":id" element={<Category />} />
        </Route>

        <Route path="/products" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="/orders" element={<Layout />}>
          <Route index element={<Orders />} />
          <Route path=":id" element={<Order />} />
        </Route>
      </Routes> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":id" element={<Category />} />
        </Route>
        <Route path="products" element={<Products />}>
          <Route path="add" element={<Product />} />
        </Route>
        <Route path="orders" element={<Orders />}>
          <Route path=":id" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
