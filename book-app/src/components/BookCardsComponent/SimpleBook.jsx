import React from "react";
import styled from "styled-components";
import BookImg from "../../assets/cover.jpg";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  border: 6px solid #f8f0f0;
  padding: 20px;
  width: 240px;
  margin-top: 0;
  background: rgba(45, 82, 77, 0.1);
  margin: 2px;
  margin-bottom: 20px;
  text-align: center;

  .link {
    font-weight: bold;
    color: black;
    background-image: url(${BookImg});
  }

  .entry {
    margin: 20px 10px;
    padding: 20px 20px;
    box-shadow: 19px 3px 15px rgba(0, 2, 1, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-family: "Hind", sans-serif;
    color: blue;
    background: linear-gradient(to bottom, #33ccff 0%, #ffcc66 100%);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 200px;
      height: 250px;
      transition: transform 1s;
    }
    h4 {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: darkgrey;
      transform: translateY(100%);
      transition: all 1s;
      p {
        max-width: 85%;
      }
    }
    &:hover h4 {
      transform: translateY(0);
    }
    &:hover img {
      transform: translateY(-30%);
    }
  }
`;

const SimpleBook = props => {
  const { title, author, id, summary, publisher } = props.book;

  const sendCurrentIdToLOcalStorage = () => {
    localStorage.setItem("CurrentId", id);
    localStorage.setItem("CurrentTitle", title);
    localStorage.setItem("CurrentAuthor", author);
    localStorage.setItem("currentSummary", summary);
    localStorage.setItem("currentPublisher", publisher);
  };

  return (
    <Container>
      <div className="delete-btn" onClick={() => props.deleteBook(id)}>
        <i className="fas fa-ban" />
      </div>
      <div className="entry">
        <Link to={`/home/${id}`} key={id} onClick={sendCurrentIdToLOcalStorage}>
          <img src={BookImg} alt="title" />
          <p>{title}</p>
          <h4>By {author}</h4>
        </Link>
      </div>

      <Link
        to="/update-form"
        onClick={sendCurrentIdToLOcalStorage}
        className="link"
      >
        <p style={{ fontFamily: "Cardo" }}>Update Book</p>
      </Link>
    </Container>
  );
};

export default withRouter(SimpleBook);
