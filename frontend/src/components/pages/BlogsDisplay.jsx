import Typography from "@mui/material/Typography";

import { connect } from "react-redux";

import "../pageStyles/blogStyles.css";


function BlogsDisplay(props) {
  const { currentBlog } = props
  console.log(currentBlog)
  return currentBlog ? (
    <div>
      <div className="acc-blog-section blog-hero ">
        <div className="blog-header-txt">
          <a className="btn link-btn">Inspiring Women</a>
          <Typography variant="h2" fontWeight={"500"}>
            {currentBlog.title}
          </Typography>
          <p>
            {currentBlog.created}- {currentBlog.author} - NO COMMENTS
          </p>
        </div>
      </div>

      <div className="acc-section">
        <div className="acc-blog-container">
          <div className="md-wrapper">
            <textarea
              value={currentBlog.markdown_content}
              style={{ width: "80ch", height: "auto" }}
            ></textarea>
          </div>
          <div className="enjoy-read">
            <h3>Enjoy Your Read?</h3>
            <h4>Check our some of our other blogs!</h4>
            <a className="btn link-btn">LET'S GO</a>
          </div>
          {/* <div className="references">
            <Typography variant="p" fontWeight={"medium"}>References</Typography>
            <div className="md-wrapper">
              <textarea style={{ width: "80ch", height: "auto", paddingTop: "1rem" }}>
              </textarea>
            </div>
          </div> */}
          <div className="socials-wrapper">
            <Typography variant="p" fontWeight={"medium"}>
              Share this:
            </Typography>
            <div className="socials">
              <a className="btn tag-btn">Twitter</a>
              <a className="btn tag-btn">Facebook</a>
              <a className="btn tag-btn">Linkedin</a>
              <a className="btn tag-btn">Email</a>
            </div>
          </div>
          <div className="likes">
            <Typography variant="p" fontWeight={"medium"}>
              Like this:
            </Typography>
            <p>Be the first to like this.</p>
          </div>
          <div className="tags">
            <Typography variant="p" fontWeight={"medium"}>
              {" "}
              Tags:
            </Typography>
            <div className="tags-wrapper">
              {
                currentBlog.tags.map((tag) => {
                  return <a className="btn tag-btn">{tag}</a>
                })
              }
              {/* <a className="btn tag-btn">{currentBlog.tags}</a>
              <a className="btn tag-btn">WOMAN HOMEOWNER</a>
              <a className="btn tag-btn">SHORT STAYS</a>
              <a className="btn tag-btn">WOMAN EMPOWERMENT</a>
              <a className="btn tag-btn">SHORT-TERM ACCOMODATION</a>
              <a className="btn tag-btn">FINANCIALS</a>
              <a className="btn tag-btn">RURAL AREAS</a> */}
            </div>
          </div>
          <div className="prev-next-blog">
            <a className="btn prev-next-btn">&lt; The Need for Women 50+</a>
            <a className="btn btn prev-next-btn">
              {" "}
              The Need for Women 50+ &gt;
            </a>
          </div>
          <Typography variant="h4" mb={6} fontWeight={"medium"}>
            {" "}
            Comments
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="comments-wrapper">
              <div className="comments">
                <h6>Leave a Reply</h6>
                <textarea
                  defaultValue={"Enter your comment here..."}
                  style={{ width: "54ch", height: "8rem", padding: "1rem" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentBlog: state.auth.currentBlog,
});

export default connect(mapStateToProps)(BlogsDisplay);
