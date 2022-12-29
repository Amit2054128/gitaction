import React from 'react'

export default function Header() {
  return (
    <>
  <div>
  <div className="preloader">
    <div className="loader rubix-cube">
      <div className="layer layer-1" />
      <div className="layer layer-2" />
      <div className="layer layer-3 color-1" />
      <div className="layer layer-4" />
      <div className="layer layer-5" />
      <div className="layer layer-6" />
      <div className="layer layer-7" />
      <div className="layer layer-8" />
    </div>
  </div>
  {/*====== PRELOADER PART START ======*/}
  {/*====== HEADER PART START ======*/}
  <header id="header-part">
    <div className="header-top d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="header-contact text-lg-left text-center">
              <ul>
                <li><img src="images/all-icon/call.png" alt="icon" /><span>(124) 123 675 598</span></li>
                <li><img src="images/all-icon/email.png" alt="icon" /><span>info@yourmail.com</span></li>
                <li><img src="images/all-icon/map.png" alt="icon" /><span>127/5 Mark street, New york</span></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="header-social text-lg-right text-center">
              <ul>
                <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </div> {/* header top */}
    <div className="navigation navigation-2">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-11 col-md-10 col-sm-9 col-9">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index-3.html">
                <img src="images/logo.png" alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="active" href="index-2.html">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index-2.html">Home 01</a></li>
                      <li><a className="active" href="index-3.html">Home 02</a></li>
                      <li><a href="index-4.html">Home 03</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about.html">About us</a>
                  </li>
                  <li className="nav-item">
                    <a href="courses.html">Courses</a>
                    <ul className="sub-menu">
                      <li><a href="courses.html">Courses</a></li>
                      <li><a href="courses-singel.html">Course Singel</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="events.html">Events</a>
                    <ul className="sub-menu">
                      <li><a href="events.html">Events</a></li>
                      <li><a href="events-singel.html">Event Singel</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="teachers.html">Our teachers</a>
                    <ul className="sub-menu">
                      <li><a href="teachers.html">teachers</a></li>
                      <li><a href="teachers-singel.html">teacher Singel</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-singel.html">Blog Singel</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="shop.html">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-singel.html">Shop Singel</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html">Contact</a>
                    <ul className="sub-menu">
                      <li><a href="contact.html">Contact Us</a></li>
                      <li><a href="contact-2.html">Contact Us 2</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav> {/* nav */}
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 col-3">
            <div className="right-icon text-right">
              <ul>
                <li><a href="#" id="search"><i className="fa fa-search" /></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag" /><span>0</span></a></li>
              </ul>
            </div> {/* right icon */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </div>
  </header>
  {/*====== HEADER PART ENDS ======*/}
  {/*====== SEARCH BOX PART START ======*/}
  <div className="search-box">
    <div className="serach-form">
      <div className="closebtn">
        <span />
        <span />
      </div>
      <form action="#">
        <input type="text" placeholder="Search by keyword" />
        <button><i className="fa fa-search" /></button>
      </form>
    </div> {/* serach form */}
  </div>
</div>


    </>
  )
}

