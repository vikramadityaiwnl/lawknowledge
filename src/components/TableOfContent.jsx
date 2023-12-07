function TableOfContent() {
  return (
    <div className="toc">
      <div className="title">
        Table Of Contents
      </div>
      <div className="contents">
        <ul>
          <li>
            <a href="#heading" className="heading">
              1. Heading 1
              <ul>
                <li>
                  <a href="#subheading" className="subheading">1.1 Subheading 1</a>
                </li>
                <li>
                  <a href="#subheading" className="subheading">1.2 Subheading 2</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href="#heading" className="heading">
              2. Heading 2
            </a>
          </li>
          <li>
            <a href="#heading" className="heading">
              3. Heading 3
              <ul>
                <li>
                  <a href="#subheading" className="subheading">3.1 Subheading 1</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href="#heading" className="heading">
              4. Heading 4
              <ul>
                <li>
                  <a href="#subheading" className="subheading">4.1 Subheading 1</a>
                </li>
                <li>
                  <a href="#subheading" className="subheading">4.2 Subheading 2</a>
                </li><li>
                  <a href="#subheading" className="subheading">4.3 Subheading 3</a>
                </li><li>
                  <a href="#subheading" className="subheading">4.4 Subheading 4</a>
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TableOfContent