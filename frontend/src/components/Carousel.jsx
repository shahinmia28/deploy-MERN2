import { styled } from "styled-components";

const Carousel = () => {
  return (
    <Wrapper>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-caption ">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;

export default Carousel;
