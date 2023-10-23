import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useParams } from "react-router-dom";
import { productData } from "../static/ProductData";
import Products from "../components/Products/Products";
import SuggestedProduct from "../components/Products/SuggestedProduct";

const ProductDetailPage = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const productName = name.replace(/-/g, " ");
  useEffect(() => {
    const data = productData && productData.find((i) => i.name === productName);
    setData(data);
  }, []);
  return (
    <div>
      <Header />
      <Products data={data} />
      {data && <SuggestedProduct data={data} />}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
