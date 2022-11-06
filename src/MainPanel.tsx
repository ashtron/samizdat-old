import React from 'react';
import 'bulma/css/bulma.min.css';
import BookForm from './BookForm'

function MainPanel({ children }: { children: React.ReactNode }) {
  console.log(children)
  return (
    <section className="container">
      <div className="panel" style={{ padding: "0px 24px 24px 24px" }}>
        <div className="tabs is-centered is-medium">
          <ul>

            <li className="is-active">
              <a>
                <span>Books</span>
              </a>
            </li>
    
            <li>
              <a>
                <span>Movies</span>
              </a>
            </li>

          </ul>
        </div>

        { children }
      </div>
    </section>
  );
}

export default MainPanel;