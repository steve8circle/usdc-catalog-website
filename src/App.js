import "./App.css";
import SearchInput from "./SearchInput";
import UsecaseCard from "./UsecaseCard";
import UsecaseDetail from "./UsecaseDetail";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

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
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredUsecases, setFilteredUsecases] = useState(usecases)

  const searchTermChanged = (term) => {
    setSearchTerm(term);
    if (term === '') return;
    search(term);
  }

  const search = (term) => {
    console.log("search " + term);
    term = term.toLowerCase();
    let filtered = usecases.filter(uc => {
      return uc.name.toLowerCase().indexOf(term) >= 0
        || uc.description.toLowerCase().indexOf(term) >= 0;
    })
    setFilteredUsecases(filtered);
  }
  const debouncedSearchTermChanged = debounce(search);

  return (
    <div className="App bg-gray-100">
      <div class="pt-10 ">
        <div class="container rounded-sm px-3 mx-auto bg-indigo-100 flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
            <h1 class="my-4 text-4xl font-bold leading-tight">
              Explore the ecosystem of applications and businesses that support
              or build on top of USDC
            </h1>
            <p class="leading-normal text-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              condimentum sapien. Aliquam scelerisque dui augue, eget vehicula
              sapien tristique nec.
            </p>
          </div>

          <div class="w-full md:w-2/5 py-6 px-10 text-center">
            <img class="w-full md:w-4/5 z-50" src="usdc.jpg" />
          </div>
        </div>
      </div>
      <div class="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <Router basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <section class="border-b py-8">
                <div class="container mx-auto flex justify-end pr-6">
                  <SearchInput searchTermChanged={debouncedSearchTermChanged}/>
                </div>
                <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                
                  <div class="w-full mb-4">
                    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                  </div>
                  
                  {filteredUsecases.map((usecase) => (
                    <div key={usecase.name} class="md:w-1/3 ">
                      <UsecaseCard 
                        class="md:w-1/3"
                        name={usecase.name}
                        description={usecase.description}
                        tags={usecase.tags}
                      />
                    </div>
                  ))}
                </div>
              </section>
            }
          />
          <Route
            path="detail/*"
            element={
              <section class="border-b py-8">
                <div class="container mx-auto flex pt-4 pb-12">
                  <UsecaseDetail />
                </div>
              </section>
            }
          />
          <Route element={<div>404</div>} />
        </Routes>
      </Router>

      <svg class="wave-top" viewBox="0 0 1439 147" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g class="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <footer class="bg-black text-white">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-4xl font-bold leading-tight">
              Building on top of USDC?
            </h1>
          </div>

          <div class="w-full md:w-3/5 py-6 px-10 text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              condimentum sapien. Aliquam scelerisque dui augue, eget vehicula
              sapien tristique nec.
            </p>
            <div class="flex justify-start">
              <button class="border-2 border-white my-10 p-2 text-sm hover:text-base items-start">
                Submit Project
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
