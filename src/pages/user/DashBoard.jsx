import React from 'react'
import {Layout} from "./../../components/layout/Layout.jsx";
import UserMenu from "./../../components/layout/UserMenu"
import { useAuth } from './../../context/auth.jsx'

const DashBoard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="conatiner-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashBoard