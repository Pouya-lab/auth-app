import Footer from "../footer/page"
import Header from "../header/page"


function Layout({children}) {
  return (
    <>
        <Header/>
            <div className="--padd" style={{minHeight : "80vh"}}>
                {children}
            </div>
        <Footer/>
    </>
  )
}

export default Layout