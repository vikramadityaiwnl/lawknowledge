function Container({children, rows, columns}) {
  return (
    <div className="container"
      style={{gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`}}>
      {children}
    </div>
  )
}

export default Container