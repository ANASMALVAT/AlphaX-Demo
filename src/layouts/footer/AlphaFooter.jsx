import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import "./alphaFooter.css"

export default function AlphaFooter() {
  return (
      <footer class="bg-[#f5f5f5] shadow dark:bg-gray-900 ">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                  <a href="https://www.alphaalgos.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <h1 className=' text-algoblack font-semibold text-3xl '>A</h1>
                      <h1 className="tracking-wide font-bold antialiased text-algoXcolor text-6xl hover:duration-[1500ms] hover:rotate-[360deg]"> X </h1>
                      <h1 className=' text-algoblack font-semibold text-3xl'>A</h1>
                  </a>
                  <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <Link to={"/contact"}>
                        <li>
                          <a href="/contact" class="hover:underline me-4 md:me-6">Contact Us</a>
                        </li>
                      </Link>
                      <li>
                          <a href="/reviews" class="hover:underline me-4 md:me-6">Reviews</a>
                      </li>
                      <Link to={"/team"}>
                        <li>
                          <a href="/team" class="hover:underline me-4 md:me-6">Team</a>
                        </li>
                      </Link>
                      <Link to={"/"}>
                        <li>
                          <a href="/" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                      </Link>
                      
                  </ul>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.alphaalgos.com/" class="hover:underline">Alpha Algo™.</a> All Rights Reserved.</span>
          </div>
      </footer>
  )
}