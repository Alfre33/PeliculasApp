
import Footer from './footer'
import Header from './Header'
import Navbar from './navbar'

const HeaderFooter=({ children })=> {
  return (
    <div className="app-container">
      <div className="content-container">
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  );
}
export default HeaderFooter;
