import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <section className="notfound">
        <div className="content">
              <h1>
                404 Not Found
              </h1>
              <p>
                Your Visted Page Not Found.You may go home page.
              </p>
              <Link to={"/"} className="btn">
                Back to Home Page</Link>
        </div>  
    </section>
  )
}

export default NotFound
