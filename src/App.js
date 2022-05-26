import "./App.css";
import SearchInput from "./SearchInput";
import UsecaseCard from "./UsecaseCard";
import UsecaseDetail from "./UsecaseDetail";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useMemo,Fragment, useEffect,useRef } from "react";
import Paginator from './Paginator';
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Detail from './detail/Detail';

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
};

function App() {

  let [filteredUsecases, setFilteredUsecases] = useState([]);
  let [currentPageUsecases,setCurrentUsecases] = useState([]);
  const PageSize = 3;
  let [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const url="https://localhost:10054/api/v1/apps"
    const fetchData = () => {
      try {
        fetch(url)
        .then(response => response.json())
        .then(data => setFilteredUsecases(data['data']));
      }catch(error){
        console.log("error",error);
      }
      };
      fetchData();
    },[])

  currentPageUsecases = useMemo(() => {
    const start = (currentPage - 1) * PageSize;
    return filteredUsecases.slice(start, start + PageSize);
  }, [currentPage, searchTerm,filteredUsecases]);

  const search = (term) => {
    setSearchTerm(term);
    if (term == "") {
      setCurrentPage(1);
      return;
    }
    console.log("search " + term);
    term = term.toLowerCase();
    let filtered = filteredUsecases.filter((uc) => {
      return (
        uc.name.toLowerCase().indexOf(term) >= 0 ||
        uc.description.toLowerCase().indexOf(term) >= 0
      );
    });
    setFilteredUsecases(filtered);
    setCurrentPage(1);
  };
  const debouncedSearchTermChanged = debounce(search);
  

  return (
    <div className="App bg-gray-100">
      <Header />

      <Router basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <section class="border-b py-8">
                  <div class="container mx-auto flex justify-end pr-6">
                    <SearchInput
                      searchTermChanged={debouncedSearchTermChanged}
                    />
                  </div>
                  <div className="container mx-auto flex flex-row">
                    <div className="basis-auto grow-0 shrink-0">
                      <Sidebar onSelectionChange={setCategory} />
                    </div>
                    <div>
                      <div className="container mx-auto grid grid-row grid-cols-3 pt-4 pb-12">
                        {currentPageUsecases.map((usecase) => (
                          <div key={usecase.appName} className='min-w-[300px]'>
                            <UsecaseCard
                              name={usecase.appName}
                              description={usecase.description}
                              slug={usecase.slug}
                            />
                          </div>
                        ))}
                      </div>
                      <div class="container mx-auto flex justify-center">
                        <Paginator
                          totalSize={filteredUsecases.length}
                          pageSize={PageSize}
                          currentPage={currentPage}
                          onPageChange={(page) => setCurrentPage(page)}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route
            path="detail/:slug"
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

      <Footer/>
    </div>
  );
}

export default App;
