import Seo from "../Components/seo";
import Navbar from "../Components/Navbar";

function HomePage() {
  return (
    <>
      <Seo/>
      <div>
        <header>
          <Navbar/>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <h1>Home Page</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
