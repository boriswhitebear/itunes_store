import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props: any) => {
  $('html, body').animate({scrollTop : 0},500);
  return (
    <>
     <section id="hero">
      <div className="hero-container">
        <div className="wow fadeIn">
          <div className="hero-logo">
            <img className="" src="img/logo.png" alt="Imperial"/>
          </div>
          <h1>Welcome to Itunes Store</h1>
          <h2>We create <span className="rotating">beautiful musics, functional websites, working mobile apps</span></h2>
        </div>
      </div>
    </section>
     <section id="about">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">About Us</h3>
              <div className="section-title-divider"></div>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
            </div>
          </div>
        </div>
        <div className="container about-container wow fadeInUp">
          <div className="row">
            <div className="col-lg-6 about-img">
              <img src="img/about-img.jpg" alt=""/>
            </div>
            <div className="col-md-6 about-content">
              <h2 className="about-title">We provide great services and ideass</h2>
              <p className="about-text">
                  The iTunes Store allows users to purchase and download items directly to portable Apple devices, such as the iPhone, iPad, Apple TV and iPod Touch. 
              </p>
              <p className="about-text">
                  Apple offers three apps, each of which provides access to certain types of content. 
              </p>
              <p className="about-text">
                  The App Store app sells apps for iOS, and also provides updates to these apps.
              </p>
            </div>
          </div>
        </div>
      </section>
    <section id="services">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Our Services</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 service-item">
            <div className="service-icon"><i className="fa fa-desktop"></i></div>
            <h4 className="service-title"><Link to="/">Lorem Ipsum</Link></h4>
            <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="col-md-4 service-item">
            <div className="service-icon"><i className="fa fa-bar-chart"></i></div>
            <h4 className="service-title"><Link to="/">Dolor Sitema</Link></h4>
            <p className="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div className="col-md-4 service-item">
            <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
            <h4 className="service-title"><Link to="/">Sed ut perspiciatis</Link></h4>
            <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="col-md-4 service-item">
            <div className="service-icon"><i className="fa fa-photo"></i></div>
            <h4 className="service-title"><Link to="/">Magni Dolores</Link></h4>
            <p className="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="col-md-4 service-item">
            <div className="service-icon"><i className="fa fa-road"></i></div>
            <h4 className="service-title"><Link to="/">Nemo Enim</Link></h4>
            <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="col-md-4 service-item">
            <div className="service-icon"><i className="fa fa-shopping-bag"></i></div>
            <h4 className="service-title"><Link to="/">Eiusmod Tempor</Link></h4>
            <p className="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div>
        </div>
      </div>
    </section>
    <section id="subscribe">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-8">
            <h3 className="subscribe-title">Subscribe For Updates</h3>
            <p className="subscribe-text">Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!</p>
          </div>
          <div className="col-md-4 subscribe-btn-container">
            <Link to="/" className="subscribe-btn">Subscribe</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomePage;