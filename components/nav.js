import React from "react";
import Link from "next/link";

// const links = [
//   { href: "https://zeit.co/now", label: "ZEIT" },
//   { href: "https://github.com/zeit/next.js", label: "GitHub" }
// ].map((link) => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = () => (
  <nav>
    <div>
      <Link href="/">
        <p>{"<Leonardo Daiub />"}</p>
      </Link>
    </div>

    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a>Projetos</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contato</a>
        </Link>
      </li>
      {/* {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      div {
        border: 1px solid #53caff;
        border-radius: 10px;
        padding: 1rem;
        color: #53caff;
        cursor: pointer;
      }
      div:hover {
        text-decoration: underline;
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
        border-right: 1px solid #53caff;
        border-right: 1px solid #53caff;
        display: flex;
        padding: 6px 8px;
        margin-right: 5px;
      }
      li:nth-child(1) {
        border-left: 1px solid #53caff;
      }
      li:hover {
        text-decoration: underline;
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
