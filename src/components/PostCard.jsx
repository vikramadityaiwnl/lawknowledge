import React from 'react'

function PostCard({content}) {
  const {category, title, date} = content

  const img = "https://img.freepik.com/premium-photo/knowledge-ideas-human-head_597582-485.jpg"

  return (
    <a href='/id' className="post-card" style={{background: `no-repeat linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)), center / cover url(${img})`}}>
      <a href="#" className="category">{category}</a>
      <div className="title">{title}</div>
      <div className="by-date">
        by <a href="#">Suresh Dhumal</a> · {date}
      </div>
    </a>
  )
}

export default PostCard