import React from "react";
//scss
import styles from "./NotFoundBlock.module.scss";
import { Link } from "react-router-dom";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>
        К сожалению данная страница отсутсвует в нашем интернет магазине
      </p>
    <Link to='/'>

      <button className="nfBtn" >На главную</button>
    
    </Link>
    </div>
  );
};
export default NotFoundBlock;
