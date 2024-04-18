import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Empty from "./Empty";
import fetchData from "../helper/apiCall";
import Users from "./Users";

//axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const Feedback = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const getAllUsers = async (e) => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`/feedback/getallfeedback`);
      setUsers(temp);
      console.log(Users);
      dispatch(setLoading(false));
    } catch (error) {}
  };

 

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="user-section">
          <h3 className="home-sub-heading">All Feedback</h3>
          {users.length > 0 ? (
            <div className="user-container">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Pic</th>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((ele, i) => {
                    return (
                      <tr key={ele?._id}>
                        <td>{i + 1}</td>
                        <td>
                          <img
                            className="user-table-pic"
                            src={ele?.pic}
                            alt={ele?.firstname}
                          />
                        </td>
                        <td>{ele?._id}</td>
                        <td>{ele?.name}</td>
                        <td>{ele?.email}</td>
                        <td>{ele?.feedback}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
    </>
  );
};

export default Feedback;
