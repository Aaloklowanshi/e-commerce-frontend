import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import {Helmet} from "react-helmet"
import toast, { Toaster } from 'react-hot-toast';

export const Layout = ({children , title , description , keywords , author}) => {
  return (
    <div>
        {/* <Helmet>
           <div>
  <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author " content={author} />
  <title>{title}</title>
</div>

        </Helmet> */}
        
    <Header/>
    <main style={{minHeight : '80vh'}}> {children} 
    <Toaster />
    </main>

    <Footer/>
    
    </div>
  )
}

// export default Layout;