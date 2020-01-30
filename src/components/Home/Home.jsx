import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  return (
    <div className="home">
      <h1>作業を選択して開始してください。</h1>
      <ul>
        <li>
          <Link to="/order-info/">オーダー番号情報</Link>
        </li>
        <li>
          <Link to="/model-param/">検査条件</Link>
        </li>
        <li>
          <Link to="/product-insp/">製品検査</Link>
        </li>
        <li>
          <Link to="/final-insp/">最終検査</Link>
        </li>
        <li>
          <Link to="/order-history/">工程履歴</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
