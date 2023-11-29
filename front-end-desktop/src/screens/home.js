import React, { useState, useEffect } from "react";
import axios from "axios";
import GenericUserImage from "../assets/userExample/GenericUserImage.png";
import { useHistory } from "react-router-dom";
import "./home.css";

export default function Home() {
  const history = useHistory();
  const [search, setSearch] = useState(null);
  const [publications, setPublications] = useState(null);
  const [users, setUsers] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = publications
    ? Math.ceil(publications.length / itemsPerPage)
    : 0;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visiblePublications = publications?.slice(startIndex, endIndex);

  const handleClickRedirectToPublicationView = (publication) => {
    const user = users.find((usr) => usr.id === publication.user_id);
    history.push({
      pathname: "/Publicacao",
      state: { publication, publications, user, users },
    });
  };

  const getPublications = async () => {
    try {
      const url = `${process.env.REACT_APP_HOST_KEY}/publication`;
      const response = await axios.get(url, { responseType: "json" });
      const { data } = response;

      if (data) {
        setPublications(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const url = `${process.env.REACT_APP_HOST_KEY}/user`;
      const response = await axios.get(url, { responseType: "json" });
      const { data } = response;

      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    getPublications();
  }, []);

  return (
    <div className="container">
      <div className="publicationsContainer">
        {visiblePublications?.map((publication) => (
          <div
            key={publication.id}
            onClick={() => handleClickRedirectToPublicationView(publication)}
            className="publicationCard"
          >
            {publication.publ_midia_type === "video" ? (
              <video
                className="publicationImage"
                controls={false}
                src={`data:video/${
                  publication.publ_midiaType || "mp4"
                };base64,${publication.publ_midia}`}
              />
            ) : (
              <img
                src={`data:image/${publication.publ_midiaType};base64,${publication.publ_midia}`}
                className="publicationImage"
                alt="publication"
              />
            )}

            <h6 className="titlePublicationCard">{publication.publ_title}</h6>
            <div className="userInfo">
              <img
                src={GenericUserImage}
                className="userProfilePic"
                alt="user"
              />
              <span className="username">
                {
                  users.find((user) => user.id === publication.user_id)
                    ?.user_name
                }
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <span
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &laquo;
            </span>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <span
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <span
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &raquo;
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
