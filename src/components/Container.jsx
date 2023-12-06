function Container({children, identifier, rows, columns}) {
  return (
    <div className={`container ${identifier}`}
      style={{gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`}}>
      {children}
    </div>
  )
}

export default Container