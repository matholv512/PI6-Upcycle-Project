import React, { useState, useEffect } from "react";
import axios from "axios";
import GenericUserImage from "../assets/userExample/GenericUserImage.png";
import { useHistory, useLocation } from "react-router-dom";
// import { useAuth } from "../hook";
import "./publicationView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faShare,
  faInfoCircle,
  faComment,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

const PublicationView = ({ route }) => {
  // const { user: usr } = useAuth();
  const location = useLocation();
  const { publication, user, publications, users } = location.state;
  const [publicationState, setPublicationState] = useState(publication);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [recommendedPublications, setRecommendedPublications] = useState([]);
  const [comments, setComments] = useState(null);
  const [addComment, setAddComment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [reloadPage, setReloadPage] = useState(0);

  const handleClickReloadPage = () => {
    setReloadPage((prev) => prev + 1);
  };

  const handlePressFollow = () => {
    setIsFollowing((prevFollowing) => !prevFollowing);
  };

  const randomizePublications = () => {
    const shuffledPublications = [...publications];
    for (let i = shuffledPublications.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPublications[i], shuffledPublications[j]] = [
        shuffledPublications[j],
        shuffledPublications[i],
      ];
    }

    const numRecommended = 3;
    const selectedRecommended = shuffledPublications.slice(0, numRecommended);

    setRecommendedPublications(selectedRecommended);
  };

  const getComments = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_KEY}/comment/publication/${publication.id}`,
        { responseType: "json" }
      );
      const { data } = response;
      if (data) {
        setComments(data);
      }
    } catch (error) {
      setComments([]);
    }
  };

  const userId = 1;
  const postComment = async () => {
    if (addComment && userId) {
      try {
        const { HOST_KEY } = process.env;
        const response = await axios.post(
          `${HOST_KEY}/comment/${publication.id}`,
          {
            user_id: userId,
            comment: addComment,
          }
        );
        const newComment = response.data;
        setComments((prevComments) => [...prevComments, newComment]);
        setAddComment("");
      } catch (error) {
        console.error(error.response);
      }
    }
  };

  useEffect(() => {
    randomizePublications();
    getComments();
  }, [reloadPage]);

  return (
    <div className="mainDiv">
      <div style={{ padding: 20 }}>
        <h1 id="mainTitle">{publication.publ_title}</h1>

        <div className="userContainer">
          <img
            src={GenericUserImage}
            alt="User Profile"
            className="userProfileImage"
          />
          <h5 id="username">{user?.user_name}</h5>

          <button onClick={handlePressFollow}>
            {isFollowing ? <span>Seguindo</span> : <span>Seguir</span>}
          </button>
        </div>

        <div className="iconsDiv">
          <FontAwesomeIcon
            icon={faEye}
            style={{ fontSize: "20px", color: "gray", marginRight: "5px" }}
          />
          <span>1,8M</span>
          <button style={{ marginLeft: "3px" }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: "20px", color: "red" }}
            />
            <span>{publication.publ_like}</span>
          </button>
          <button style={{ marginLeft: "3px", marginRight: "3px" }}>
            <FontAwesomeIcon
              icon={farBookmark}
              style={{ fontSize: "20px", color: "gray", marginRight: "3px" }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faShare}
              style={{ fontSize: "20px", color: "gray" }}
            />
          </button>
        </div>

        <div className="midiaDiv">
          {publication.publ_midia && publication.publ_midia_type === "video" ? (
            <video
              controls
              src={`data:video/mp4;base64,${publication.publ_midia}`}
            />
          ) : (
            <img
              src={`data:image/${publication.publ_midiaType};base64,${publication.publ_midia}`}
              alt="Publication Media"
            />
          )}
        </div>

        <div className="contentDiv">
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ fontSize: "30px", color: "gray", marginRight: 5 }}
            />
            <h3>Descrição</h3>
          </div>
          <p>{publication.publ_description}</p>
        </div>

        <div className="contentDiv">
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faComment}
              style={{ fontSize: "30px", color: "gray", marginRight: 5 }}
            />
            <h3>Comentários</h3>
          </div>

          <div>
            {comments
              ? comments.map((comment) => (
                  <div className="commentsDiv" key={comment.id}>
                    <div style={{ display: "flex" }}>
                      <img src={GenericUserImage} alt="User Profile" />
                      {users && users.length > 0 && comment.user_id && (
                        <p>
                          {
                            users.find((usr) => usr.id === comment.user_id)
                              ?.user_name
                          }
                        </p>
                      )}
                    </div>
                    <span>{comment.comment}</span>
                  </div>
                ))
              : null}
          </div>

          <div>
            <div>
              <textarea
                placeholder="Adicionar um comentário"
                value={addComment}
                onChange={(e) => setAddComment(e.target.value)}
              />
            </div>
            <button onClick={postComment}>Enviar</button>
          </div>
        </div>

        <div className="contentDiv">
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ fontSize: "30px", color: "gray", marginRight: 5 }}
            />
            <h3>Recomendados</h3>
          </div>
          <div className="recommendedPublicationsContainer">
            {recommendedPublications
              ? recommendedPublications.map((p) => (
                  <div
                    key={p.id}
                    className="recommendedPublication"
                    onClick={() => {
                      history.push({
                        pathname: "/publicacao",
                        state: {
                          publication: p,
                          user,
                          publications,
                          users,
                          reloadPage,
                        },
                      });
                      handleClickReloadPage();
                    }}
                  >
                    <div className="publicationContent">
                      {p.publ_midia && p.publ_midia_type === "video" ? (
                        <video
                          controls={false}
                          className="publicationMedia"
                          src={`data:video/mp4;base64,${publication.publ_midia}`}
                        />
                      ) : (
                        <img
                          className="publicationMedia"
                          src={`data:image/${p.publ_midiaType};base64,${p.publ_midia}`}
                          alt="Publication Media"
                        />
                      )}

                      <span className="publicationTitle">{p.publ_title}</span>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationView;
