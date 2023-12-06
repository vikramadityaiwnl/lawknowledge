import Container from "./Container"

function Footer() {
  return (
    <div className="footer">
      <Container columns={2}>
        <div className="logo">
          lawknowledge
          <div className="copyright">
            Copyright © 2023 lawknowledge, All Rights Reserved.
          </div>
        </div>
        <div className="quick-links">
          <Container columns={3}>
            <div className="footer-posts">
              <div className="title">
                Posts
              </div>
              <div className="links">
                <a href="#">Home</a>
                <a href="#">Random Blog</a>
              </div>
            </div>
            <div className="footer-categories">
              <div className="title">
                Categories
              </div>
              <div className="links">
                <a href="#">House</a>
                <a href="#">Networking</a>
                <a href="#">Car</a>
                <a href="#">IPC</a>
                <a href="#">Land</a>
                <a href="#">Other</a>
              </div>
            </div>
            <div className="footer-social-links">
              <div className="title">
                Social Links
              </div>
              <div className="links">
                <a href="#">Facebook</a>
                <a href="#">Youtube</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Footer