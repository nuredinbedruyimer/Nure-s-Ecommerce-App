import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/style";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/ProductData";
import Footer from "../components/Layout/Footer";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const x = searchParams.get("category");

  const [data, setData] = useState([]);
  useEffect(() => {
    if (x === null) {
      const Data =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(Data);
    } else {
      const Data =
        productData && productData.filter((data) => data.category === x);
      setData(Data);
    }
  }, []);
  return (
    <div>
      <div>
        <Header activeHeading={3} />
        {x}
        <br />
        <br />
      </div>
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data &&
            data.map((data, index) => <ProductCard data={data} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
