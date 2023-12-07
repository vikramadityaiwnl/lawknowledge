function FeaturePostCard({row, col, content}) {
  const {category, title, date} = content
  
  const img = "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_576/https://www.iimtindia.net/Blog/wp-content/uploads/2022/06/Law-Judiciary-Exam-1024x576.jpg"

  return (
    <a href="/id" className="feature-blog-card" style={{background: `no-repeat linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), center / cover url(${img})`, gridColumn: ""}}>
      <a href="#" className="category">{category}</a>
      <div className="title">{title}</div>
      <div className="by-date">
        by <a href="#">Suresh Dhumal</a> · {date}
      </div>
    </a>
  )
}

export default FeaturePostCard