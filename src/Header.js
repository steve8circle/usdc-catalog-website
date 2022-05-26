import React from "react";
import CircleLogo from './circle_logo_dark.png';

export default function Header() {
  return (
    <nav class="fixed sticky top-0 z-10 w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <a class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          href="https://www.circle.com"
        >
          <img class="h-10, w-10" src={CircleLogo}/>
        </a>
        <div class="collapse navbar-collapse flex-grow items-center text-sm font-bold uppercase">
          <ul class="navbar-nav flex flex-row gap-4 pl-8 list-style-none mr-auto">
            <li class="nav-item p-2">
              <a class="nav-link" href="https://www.circle.com/">
                Products
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link hover:opacity-80 focus:opacity-80 p-0"
                href="https://www.circle.com/"
              >
                Solutions
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link hover:opacity-80 focus:opacity-80 p-0"
                href="https://www.circle.com/"
              >
                USDC
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link hover:opacity-80 focus:opacity-80 p-0"
                href="https://www.circle.com/en/pricing"
              >
                Pricing
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link hover:opacity-80 focus:opacity-80 p-0"
                href="https://www.circle.com/"
              >
                Developers
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link hover:opacity-80 focus:opacity-80 p-0"
                href="https://www.circle.com/"
              >
                Insights
              </a>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link hover:opacity-80 focus:opacity-80 p-0"
                href="https://www.circle.com/"
              >
                Company
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
