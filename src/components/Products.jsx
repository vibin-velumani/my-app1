import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Topbar from "./Topbar";
import Search from "antd/es/transfer/search";
import { Space } from "antd";

const Product = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [apiRes, setApiRes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setApiRes(json);
        setList(json);
        const c = json.map((obj) => obj.category);
        setCategory([...new Set(c)]);
      })
      .catch();
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setList(apiRes);
    } else {
      const res = apiRes.filter((obj) => obj.category === selectedCategory);
      setList(res);
    }

    if (searchQuery !== "") {
      let filterList = list.filter((obj) =>
        obj.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setList(filterList);
    }
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Topbar category={category} setSelectedCategory={setSelectedCategory} />
      <Space.Compact>
      <Search
        placeholder="Search products"
        onChange={(e) => handleSearch(e)}
        enterButton
      />
      </Space.Compact>
      <div className="product-list">
        {list.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
