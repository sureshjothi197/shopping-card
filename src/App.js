import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import CustomDropDown from "./component/Dropdown";
import ShopCard from "./component/ShopCard";
import { getData } from "./Utils/apiCall";
import Loader from "./component/Loader";
import Footer from "./component/Footer";
import Pagination from "./component/Pagination";

function App() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    getShopData();
  }, []);

  const getShopData = async () => {
    let response = await getData(`products?limit=${limit}&skip=${skip}`);
    if (response && response.data && response.data.products) {
      setData(response.data.products);
      setTotalPage(Math.ceil(response.data.total/limit))
    }
    let categoryCollection = await getData(
      `products/categories?limit=${limit}&skip=${skip}`
    );
    if (
      categoryCollection &&
      categoryCollection.data &&
      Array.isArray(categoryCollection.data)
    ) {
      setCategories(categoryCollection.data);
    }
  };


  const DropdownSelectHandler = async (value) => {
    setSelectedCategory(value)
    let categoryResponse = await getData(
      `products/category/${value}?limit=${limit}&skip=${skip}`
    );
    if (
      categoryResponse &&
      categoryResponse.data &&
      categoryResponse.data.products
    ) {
      setData(categoryResponse.data.products);
      setTotalPage(Math.ceil(categoryResponse.data.total/limit))
    }
  };
  // const handleSearch = useCallback(debounce(inputVal => SearchHandler(inputVal), 500), []);

  const SearchHandler = async (value) => {
    setSearchValue(value);
    let searchResponse = await getData(
      `products/search?q=${value}&limit=${limit}&skip=${skip}`
    );
    if (searchResponse && searchResponse.data && searchResponse.data.products) {
      setTotalPage(Math.ceil(searchResponse.data.total/limit))
      setData(searchResponse.data.products);
    }
  };

  useEffect(()=>{
    getShopData()
  },[skip])

  const onPageChange = (page) => {
    setSkip((page - 1) * limit);
  };

  return (
    <div>
      <div className="App container">
        <Header onSearchChange={SearchHandler} searchValue={searchValue} />
        <div class="card head-card rounded">
          <div class="card-body">
            <strong>Lorem Ipsum</strong>
            <p>
              slash sales begins in June, Get up to 80% Discount on all Product{" "}
              <strong>Read More</strong>
            </p>
          </div>
        </div>
        <div className="py-3">
          <CustomDropDown
            data={categories}
            value={selectedCategory}
            label={"Select Category"}
            onChange={DropdownSelectHandler}
          />
        </div>
        <div className="row">
          {!data && <Loader />}
          {Array.isArray(data) && data.length > 0 ? (
            data.map((product, index) => (
              <div className="col-3 py-3">
                <ShopCard product={product} />
              </div>
            ))
          ) : (
            <div>No products</div>
          )}
        </div>
        { totalPage ? <div className="d-flex justify-content-end">
        <Pagination totalPages={totalPage} onPageChange={onPageChange} />
        </div>: null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
