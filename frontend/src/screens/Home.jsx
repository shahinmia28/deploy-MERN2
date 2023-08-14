import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { styled } from "styled-components";
import API from "../components/Api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [category, setCategory] = useState([]);

  const loadData = async () => {
    let response = await fetch(`${API}/display_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    response = await response.json();

    await setFoodData(response[0]);
    await setCategory(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Wrapper>
      <div className="carousel-container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-caption ">
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900×700/?burger"
                className="d-block w-100"
                alt="1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?pastry"
                className="d-block w-100"
                alt="2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?barbeque"
                className="d-block w-100"
                alt="3"
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
          </button>
        </div>
      </div>
      <div className="container">
        <div className="card-container">
          {category !== []
            ? category.map((cData, i) => {
                return (
                  <div key={i} className="row mb-3">
                    <div>
                      <h2 className="categoryName">{cData.categoryname}</h2>
                    </div>
                    <hr />
                    {foodData !== [] ? (
                      foodData
                        .filter(
                          (item) =>
                            item.CategoryName === cData.categoryname &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((footItemData, i) => {
                          return (
                            <div key={i} className="col-12 col-md-6 col-lg-3">
                              <Card foodItem={footItemData} />
                            </div>
                          );
                        })
                    ) : (
                      <div>No Item found</div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .carousel-container {
    .carousel {
      object-fit: contain;
      .carousel-inner {
        .carousel-caption {
          z-index: 5;
        }
        .carousel-item {
          img {
            height: 600px;
            filter: brightness(80%);
            background-position: center;
            background-size: contain;
          }
        }
      }
    }
  }
  .card-container {
    margin: 20px 0;
    .categoryName {
      text-transform: uppercase;
      text-align: center;
      padding: 30px;
      font-weight: 700;
    }
  }
`;
export default Home;
