import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/notification.css";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import { setLoading } from "../redux/reducers/rootSlice";
import Loading from "../components/Loading";
import "../styles/user.css";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const getAllContacts = async () => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`/contacts/getallcontact`);
      console.log(temp);
      setContacts(temp);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/contacts/add",
        {
          name: contactName, 
          contact: contactNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log({ name: contactName, number: contactNumber })
      // Display toast notification
      toast.success("Contact added successfully");

      // After successfully adding the contact, close the modal and fetch updated contacts
      setShowModal(false);
      await getAllContacts();
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Unable to add contact");
    }
  };
  const handleDeleteContact = async (contactId) => {
    try {
      const response = await axios.post(
        `/contacts/delete`, 
        {
          id: contactId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Display success toast notification
      toast.success("Contact deleted successfully");

      // Fetch updated contacts
      await getAllContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
      // Display error toast notification
      toast.error("Unable to delete contact");
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="container notif-section">
          <h2 className="page-heading">Your Contacts</h2>

          {contacts.length > 0 ? (
            <div className="Contacts">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Content Number</th>
                    <th>Datetime</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts?.map((ele, i) => {
                    return (
                      <tr key={ele?._id}>
                        <td>{i + 1}</td>
                        <td>{ele?.name}</td>
                        <td>{ele?.contact}</td>
                        <td>{ele?.createdAt}</td>
                        <td onClick={() => handleDeleteContact(ele._id)}><MdDeleteForever /></td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={5} className="addContact" onClick={toggleModal}>
                      <FaPlus /> Add Contact
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="Contacts">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Content Number</th>
                    <th>Date</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="addContact" onClick={toggleModal}>
                      <FaPlus /> Add Contact
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {showModal && (
            <div className="modal flex-center">
              <div className="modal__content">
              <h2 className="page-heading">Add Contact</h2>
              <IoMdClose
                onClick={toggleModal}
                className="close-btn"
              />
              <div className="register-container flex-center book">
                <form className="register-form">
                  <input
                    type="text"
                    placeholder="Contact Name"
                    value={contactName}
                    className="form-input"
                    onChange={(e) => setContactName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    className="form-input"
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                  <button className="btn form-btn" onClick={handleAddContact}>Add</button>
                </form>
              </div>

              </div>
            </div>
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Contacts;
