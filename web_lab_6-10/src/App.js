import React from "react";
import NavigationBar from "/Users/Vlad/second-app/src/components/structure/navigation-bar/NavigationBar.js";
import HomePage from "/Users/Vlad/second-app/src/components/structure/HomePage/HomePage.js";
import Catalog from "/Users/Vlad/second-app/src/components/structure/Cataloge/CatalogePage.js";
import Cart from "/Users/Vlad/second-app/src/components/structure/Cart.js";
import FooterBlock from "/Users/Vlad/second-app/src/components/structure/FooterBlock.js";
import ItemsContextProvider from "/Users/Vlad/second-app/src/components/structure/Item/ItemsContextProvider.js";
import ItemDetailedView from "./components/structure/Item/ItemDetailedView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltersContextProvider from "/Users/Vlad/second-app/src/components/Filter/FilterWork.js";
import "normalize.css";
import SearchBlockContextProvider from "/Users/Vlad/second-app/src/components/structure/navigation-bar/SearchBlockContextProvider.js";
import store from "/Users/Vlad/second-app/src/components/redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <Provider store={store}>
      <ItemsContextProvider>
        <FiltersContextProvider>
          <SearchBlockContextProvider>
            <BrowserRouter>
              <NavigationBar />
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage />}></Route>
                  <Route path="catalog" element={<Catalog />}></Route>
                  <Route path="cart" element={<Cart />}></Route>
                  <Route path="item/:id" element={<ItemDetailedView />}></Route>
                  <Route path="*" element={<HomePage />}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
            <FooterBlock />
          </SearchBlockContextProvider>
        </FiltersContextProvider>
      </ItemsContextProvider>
      </Provider>
    </>
  );
}

export default App;