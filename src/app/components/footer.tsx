import { Link } from 'react-router-dom'

const Footer = (props: any) =>  {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              &copy; Copyright <strong>Itunes Store</strong>. All Rights Reserved
            </div>
            <div className="credits">
              <Link to="/">Itunes Store</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;