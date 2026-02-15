import { useState, type KeyboardEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import "./SearchBar.css";

interface SearchBarProps {
  placeholder?: string;
  initialValue?: string;
  onSearch?: (query: string) => void;
  redirectOnSubmit?: boolean;
}

export default function SearchBar({
  placeholder = "Rechercher un airdrop...",
  initialValue = "",
  onSearch,
  redirectOnSubmit = false,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (redirectOnSubmit) {
      if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      } else {
        navigate("/search");
      }
    } else if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // If redirectOnSubmit is true, we might want to redirect on click too if requested
  // "quand on clique sur la recherche on arrive sur une page recherche directement"
  // Implementing focus redirect only if explicitly requested, but for now stick to submit/enter
  // or simple click on the container if that's what "clique sur la recherche" implies.
  // Let's make the input redirect on focus if it's meant to be a simple trigger.
  // But usually search bars let you type. The prompt says "quand on clique sur la recherche on arrive sur une page recherche"
  // It could mean: click input -> go to search page.
  // Let's implement a mode for that.

  const handleInputClick = () => {
    if (redirectOnSubmit && !query) {
      navigate("/search");
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={handleInputClick}
      />
      <button className="searchbar-btn" onClick={handleSearch}>
        <img src="/img/svg/search.svg" alt="Rechercher" />
      </button>
    </div>
  );
}
