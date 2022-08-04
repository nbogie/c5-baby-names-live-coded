interface SearchBarProps {
  searchTerm: string;
  onChange: (str: string) => void

}

export function SearchBar(props: SearchBarProps) {


  return (
    <div className="searchBar">
      Search term is currently: {props.searchTerm}
      <hr />
      <input
        type="text"
        onChange={(ev) => props.onChange(ev.target.value)}
        value={props.searchTerm}
        placeholder={"search term..."}
      />
      <button onClick={(ev) => props.onChange("")}>CLEAR</button>
      <hr />
    </div>
  );
}
