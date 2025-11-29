import "./SearchBar.css";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "placeolder",
}: SearchBarProps) {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder={placeholder}
      />
      <button className="searchbar-btn">
        <img src="img/svg/search.svg" alt="Rechercher" />
      </button>
    </div>
  );
}
