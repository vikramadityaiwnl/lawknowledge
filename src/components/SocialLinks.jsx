import Container from "./Container"

function SocialLinks() {
  return (
    <div className="social-links">
      <Container columns={2}>
        <div className="sl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7" />
          </svg>
          Facebook
        </div>
        <div className="sl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <path d="m10 9 5 3-5 3z" />
          </svg>
          Youtube
        </div>
        <div className="sl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 11v5M8 8v.01M12 16v-5" />
            <path d="M16 16v-3a2 2 0 0 0-4 0" />
          </svg>
          LinkedIn
        </div>
      </Container>
    </div>
  )
}

export default SocialLinks