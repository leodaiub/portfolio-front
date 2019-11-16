import React from "react";
import Link from "./ActiveLink";

const Nav = () => (
  <nav>
    <div>
      <Link href="/">
        <p>{"<LEONARDO DAIUB />"}</p>
      </Link>
    </div>

    <ul>
      <li>
        <Link href="/" activeClassName="active">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog" activeClassName="active">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/projects" activeClassName="active">
          <a>Projetos</a>
        </Link>
      </li>
      <li>
        <Link href="/contact" activeClassName="active">
          <a>Contato</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      div {
        padding: 1rem;
        color: #53caff;
        cursor: pointer;
        font-weight: bold;
      }

      div:hover {
        border-bottom: 2px solid #fff;
      }
      nav {
        padding: 0.5rem;
        align-items: center;
        display: flex;
        text-align: center;
        justify-content: space-between;
      }
      ul {
        display: flex;
        justify-content: flex-end;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 1rem;
        margin-right: 5px;
      }

      li:hover {
        padding: 1rem;
        border-bottom: 2px solid #fff;
      }
      a {
        color: #53caff;
        text-decoration: none;
        font-size: 20px;
      }
    `}</style>
  </nav>
);

export default Nav;
