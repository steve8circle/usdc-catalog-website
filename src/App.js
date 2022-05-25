import "./App.css";
import SearchInput from "./SearchInput";
import UsecaseCard from "./UsecaseCard";
import UsecaseDetail from "./UsecaseDetail";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useMemo,Fragment, useEffect } from "react";
import Paginator from './Paginator';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from "./Sidebar";
import Detail from './detail/detail';

const usecases = [
  {
    name: "Coinbase",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    tags: ["exchange"],
  },
  {
    name: "FTX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    tags: ["exchange"],
  },
  {
    name: "Binance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    tags: ["exchange"],
  },
  {
    name: "Circle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    tags: ["payment", "USDC"],
  },
];

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function App() {

  const [items,setItems] = useState([]);
  useEffect(() => {
    fetch(" https://localhost:10054/api/v1/apps",
    {mode:'cors',
    credentials: 'include'})
    .then(res => res.json)
    .then((result) => console.log(result))
  })

  const PageSize = 3;
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredUsecases, setFilteredUsecases] = useState(usecases)
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);

  const currentPageUsecases = useMemo(() => {
    const start = (currentPage - 1) * PageSize;
    return filteredUsecases.slice(start, start + PageSize);
  }, [currentPage, searchTerm]);

  const search = (term) => {
    setSearchTerm(term);
    if (term == '') {
      setFilteredUsecases(usecases);
      setCurrentPage(1);
      return;
    }
    console.log("search " + term);
    term = term.toLowerCase();
    let filtered = usecases.filter(uc => {
      return uc.name.toLowerCase().indexOf(term) >= 0
        || uc.description.toLowerCase().indexOf(term) >= 0;
    })
    setFilteredUsecases(filtered);
    setCurrentPage(1);
  }
  const debouncedSearchTermChanged = debounce(search);

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
              <Header />
              <section class="border-b py-8">
                <div class="container mx-auto flex justify-end pr-6">
                  <SearchInput searchTermChanged={debouncedSearchTermChanged}/>
                </div>
                <div class="container mx-auto flex flex-row">
                  <div class="basis-auto grow-0 shrink-0">
                    <Sidebar onSelectionChange={setCategory}/></div>
                <div>
                <div class="container mx-auto grid grid-row grid-cols-3 pt-4 pb-12">
                  {currentPageUsecases.map((usecase) => (
                    <div key={usecase.name}>
                      <UsecaseCard 
                        name={usecase.name}
                        description={usecase.description}
                        tags={usecase.tags}
                      />
                    </div>
                  ))}
                </div>
                <div class="container mx-auto flex justify-center">
                  <Paginator
                    totalSize={filteredUsecases.length}
                    pageSize={PageSize}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                  />
                </div>
                </div>
                </div>
              </section>
              <Footer />
              </Fragment>
            }
          />
          <Route
            path="detail/*"
            element={
              // <section class="border-b py-8">
              //   <div class="container mx-auto flex pt-4 pb-12">
                  <Detail />
              //   </div>
              // </section>
            }
          />
          <Route element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
