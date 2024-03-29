 import React from 'react'
 import {Layout} from './../../components/layout/Layout.jsx'
 import AdminMenu from './../../components/layout/AdminMenu.jsx'
 
 const Users = () => {
   return (
     <Layout>

        <div className='container-fluid m-3 p-3'>
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>

            <div className="col-md-9">
                <h1>
                    users
                </h1>
            </div>
        </div>
        </div>
    </Layout>
   )
 }
 
 export default Users