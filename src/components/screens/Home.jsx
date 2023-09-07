import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Carousel } from "../Carousel";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function Home() {
  const [foodCateg, setFoodCateg] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const [search,setSearch]=useState("")

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCateg(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div>
          <div>
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              style={{ objectFit: "contain !important" }}
            >
              <div className="carousel-inner" id="carousel">
                <div className="carousel-caption" style={{ zIndex: "10" }}>
                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e)=>{setSearch(e.target.value)}}
                    />
                    {/* <button
                      className="btn text-white "
                      style={{ backgroundColor: "#00bc8c" }}
                      type="submit"
                    >
                      Search
                    </button> */}
                  </div>
                </div>
                <div className="carousel-item active">
                  <img
                    src="https://source.unsplash.com/random/900×700/?burger"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://source.unsplash.com/random/900×700/?pastry"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://source.unsplash.com/random/900×700/?barbeque"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {foodCateg !== []
          ? foodCateg.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter((item) => (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                      .map((filteredItems) => {
                        return (
                          <div
                            key={filteredItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filteredItems}
                              options={filteredItems.options[0]}
                              
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div> No Such Data Found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
