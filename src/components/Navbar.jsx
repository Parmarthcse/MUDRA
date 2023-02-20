import { useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <p>COINDOM</p>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#market">Market</a>
            </li>
            <li>
              <a href="#choose-us">Choose Us</a>
            </li>
            <li>
              <a href="#join">Join</a>
            </li>
          </ul>
          <span>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
            {/* mobile */}
            <i className="fa-solid fa-bars-staggered hamburger-menu"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
