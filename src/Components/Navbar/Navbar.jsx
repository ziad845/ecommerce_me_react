import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Usercontext } from "../../context/UserContext";
import { productToCart } from './../../context/AddProductToCartContext';

export default function Navbar() {
  const [visib, setvisib] = useState(false);
  const navigate = useNavigate();
  let { usertoken, setusertoken } = useContext(Usercontext);
  let { numofitems, products } = useContext(productToCart);

  function logout() {
    localStorage.removeItem("usertoken");
    setusertoken(null);
    navigate("/Login");
  }

  return (
    <nav className="z-50 bg-slate-200 static md:fixed top-0 left-0 right-0">
      <div className="md:w-[90%] mx-auto py-4 flex justify-between items-center flex-wrap">

        <div className="flex justify-between items-center w-full md:w-auto">
          <NavLink to="" className="text-3xl">
            <img src={logo} alt="logo" className="md:w-auto" />
          </NavLink>
          <i
            onClick={() => setvisib(!visib)}
            className="fa-solid text-3xl cursor-pointer md:hidden"
          >
            <i className={`fa-bars ${visib ? "fa-xmark" : "fa-bars"}`}></i>
          </i>
        </div>

        <div
          className={`${visib ? "block" : "hidden"
            } md:flex justify-center items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          {usertoken !== null ? (
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex items-center gap-4">
                <li className="text-center">
                  <NavLink to="Woshlistcom" className="flex items-center space-x-2">
                    <i className="fa-solid fa-heart"></i> <span>Wishlist</span>
                  </NavLink>
                </li>
                <li className="text-center relative">
                  <NavLink to="Cart" className="flex items-center space-x-2">
                    <i className="fa-solid fa-cart-shopping"></i> <span>Cart</span>
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 rounded-full md:-top-3 -top-1 md:-right-3 right-34">
                      {numofitems === 0 && products?.length !== 0 ? (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                      ) : (
                        numofitems
                      )}
                    </div>
                  </NavLink>
                </li>
              </div>

              <div className="border-l-2 border-gray-400 h-6"></div> {/* فاصل بين الأقسام */}

              {/* باقي الأقسام على الشمال */}
              <li className="text-center">
                <NavLink to="Catigories" className="flex items-center space-x-2">
                  <i className="fa-solid fa-th-list"></i> <span>Categories</span>
                </NavLink>
              </li>
              <li className="text-center">
                <NavLink to="Products" className="flex items-center space-x-2">
                  <i className="fa-solid fa-cogs"></i> <span>Products</span>
                </NavLink>
              </li>
              <li className="text-center">
                <NavLink to="Brands" className="flex items-center space-x-2">
                  <i className="fa-solid fa-tags"></i> <span>Brands</span>
                </NavLink>
              </li>
              <li className="text-center">
                <NavLink to="allorders" className="flex items-center space-x-2">
                  <i className="fa-solid fa-box"></i> <span>All Orders</span>
                </NavLink>
              </li>
            </ul>
          ) : null}
        </div>

        <div
          className={`${visib ? "block" : "hidden"
            } md:flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0`}
        >
          <div className="icons text-center flex gap-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-all duration-200">
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://www.facebook.com/ziad20022" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-all duration-200">
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </a>
            <a href="https://github.com/ziad845" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-all duration-200">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
          <ul className="flex flex-col md:flex-row items-center gap-4">
            {usertoken === null ? (
              <>
                <li className="text-center">
                  <NavLink to="Login" className="flex items-center space-x-2">
                    <i className="fa-solid fa-sign-in-alt"></i> <span>Login</span>
                  </NavLink>
                </li>
                <li className="text-center">
                  <NavLink to="Register" className="flex items-center space-x-2">
                    <i className="fa-solid fa-user-plus"></i> <span>Register</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="text-center cursor-pointer flex items-center space-x-2" onClick={() => logout()}>
                <i className="fa-solid fa-sign-out-alt"></i> <span>Logout</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
