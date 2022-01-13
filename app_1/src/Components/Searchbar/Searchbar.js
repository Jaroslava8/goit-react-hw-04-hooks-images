import styles from "../Searchbar/Searchbar.module.css";
import React, { useState } from "react";
import propTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    if (search.trim() === "") return alert("We found 0 posts for your search, Please try searching again ");

    onSubmit(search);
    setSearch("");
  };

  return (
    <div className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={submitForm}>
        <button className={styles.searchFormButton} type="submit">
          <div stroke="black" size={25} />
        </button>
        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
