function Icon({identifier, iconName, onIconClick }) {
  return (
    <span className={`icon material-symbols-rounded ${identifier}`} onClick={onIconClick}>
      {iconName}
    </span>
  )
}

export default Icon