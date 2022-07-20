import React from "react";
import "@styles/Header.scss";
import { useNavigate } from "react-router-dom";
import { MeliContext } from "../../context/MeliContext";
const Header = () => {
  const { setQuery, query, setSearch } = React.useContext(MeliContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch((value) => value + 1);
    navigate(`/items?q=${query}`);
  };

  return (
    <header
      role="banner"
      data-siteid="MCO"
      className="nav-header nav-header-plus"
    >
      <div className="nav-logo" />
      <form className="nav-search" onSubmit={handleSubmit}>
        <input
          onChange={(value) => setQuery(value.target.value)}
          type="text"
          className="nav-search-input"
          aria-label="Ingresa lo que quieras encontrar"
          name="as_word"
          placeholder="Nunca dejes de buscar"
          maxLength={120}
          autoFocus
        />
        <button type="submit" className="nav-search-btn" tabIndex={3}>
          <div role="img" aria-label="Buscar" className="nav-icon-search" />
        </button>
      </form>
    </header>
  );
};

export default Header;
