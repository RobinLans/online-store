import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { populateProductsList } from "./redux/reducers/products";
import jsonData from "./data/products.json";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import About from "./components/About";
import DetailsPage from "./components/DetailsPage";

function App() {
  const dispatch = useDispatch();
  const showPopup = useSelector((state) => {
    return state.manageCart.value.showCart;
  });

  useEffect(() => {
    const loadData = [...jsonData];
    dispatch(populateProductsList(loadData));
  }, []);

  return (
    <div className="flex relative min-h-screen bg-primary-beige flex-col items-center font-body text-primary-blue font-bold">
      <Router>
        <Navbar />
        <div className="myBorder mainContainer">
          <Route path="/" exact component={MainContent}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/details/:id" component={DetailsPage}></Route>
        </div>
        <Footer />
      </Router>
      {showPopup && (
        <span className="fixed bg-primary-green top-2 p-2 text-white rounded shadow-2xl">
          Added To Cart
        </span>
      )}
    </div>
  );
}

export default App;
