import Icon from "./Icon"

function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Searching for ...."/>
      <Icon iconName="search" />
    </div>
  )
}

export default SearchBox