
import Layout from "@/components/layout/page"
import PageMenu from "@/components/pageMenu/page"
import UserStats from "@/components/user-stats/page"
import Search from "@/components/search/page"
import { FaTrashAlt } from "react-icons/fa"
import ChangeRole from "@/components/change-role/page"


import '../../styles/vendor/user-list.scss'


function UserList() {


  return (
    <>
        
            <Layout>
                <section>
                    <div className="container">
                        <PageMenu/>

                        <UserStats />

                        <div className="user-list">
                          <div className="table">
                            <div className="--flex-between">
                              <span>
                                <h3>All Users</h3>
                              </span>

                              <span>
                                <Search />
                              </span>

                            </div>
                            
                            <table>
                              <thead>
                                <tr>
                                  <th>S/N</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Role</th>
                                  <th>Change Role</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Pouya</td>
                                  <td>pouya@mail.com</td>
                                  <td>admin</td>
                                  <td>
                                    <ChangeRole/>
                                  </td>
                                  <td>
                                    <span>
                                      <FaTrashAlt size={20} color="red" />
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                          </table>
                          </div>

                         <div>
                          
                         </div>
                        </div>

                    </div>
                </section>
            </Layout>
       
    </>
  )
}

export default UserList