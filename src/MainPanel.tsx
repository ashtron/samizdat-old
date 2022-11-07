import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import BookForm from './BookForm';
import MovieForm from './MovieForm';

function MainPanel() {
  const [selectedTab, setSelectedTab] = useState("book");

  function handleTabClick(event: React.MouseEvent<Element, MouseEvent>) {
    if (!event.currentTarget.classList.contains("is-active")) {
      toggleActiveTab();
      
      if (event.currentTarget.id === "books-tab") {
        setSelectedTab("movie");
      } else {
        setSelectedTab("book");
      }
    }
  }

  function toggleActiveTab() {
    document.getElementById("books-tab")?.classList.toggle("is-active");
    document.getElementById("movies-tab")?.classList.toggle("is-active");
  }

  return (
    <section className="container" style={{ marginTop: "10%", width: "60%" }}>
      <div className="panel" style={{ padding: "0px 24px 24px 24px" }}>
        <div className="tabs is-centered is-medium is-boxed">
          <ul>

            <li id="books-tab" className={ selectedTab === "book" ? "is-active" : "" } onClick={ handleTabClick }>
              <a>
                <span>Books</span>
              </a>
            </li>
    
            <li id="movies-tab" className={ selectedTab === "movie" ? "is-active" : "" } onClick={ handleTabClick }>
              <a>
                <span>Movies</span>
              </a>
            </li>

          </ul>
        </div>

        { selectedTab === "book" ? <BookForm /> : <MovieForm /> }
      </div>
    </section>
  );
}

export default MainPanel;