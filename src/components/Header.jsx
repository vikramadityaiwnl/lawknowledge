function Header({content}) {
  const {img, category, title, date} = content
  
  return (
    <div className="header">
      <img src={img} />
      <a href="#" className="category">{category}</a>
      <div className="title">{title}</div>
      <div className="by-date">
        by <a href="#">Suresh Dhumal</a> · {date}
      </div>
    </div>
  )
}

export default Header