import React from 'react'
import './ProductCategory.css'
import { Link , useNavigate} from 'react-router-dom'



export const CategoryBox = (props) => {

const navigate = useNavigate()





  const handleCategorybox = (start, end) => {
    let array = []
    if (props.products.length !== 0) {
      for (start; start <= end; start++) {
        const obj = props.products[start]
        console.log(obj.name)
        array.push(
          <div id='productimagecategory' key={props.products[start].id} onClick={handleClick}>
            <img id={props.products[start].id} className="d-block w-20" key={props.products[start].id} src={props.products[start].image} />
          </div>
        )
      }
    }
    return array
  }
  const handleClick = (e) => {
    // props.id = e.target.id
    console.log(e.target.id)
    navigate(`/id/${e.target.id}`)
  }
  return (
    <>
      <div className="product box">
        <div>Christmas Selection</div>
        <div id="catagorycarousel" className="carousel" data-ride="carousel">
          <div className="carouselInner">
            <div className="carousel-item active">
              <div className="productview">
                {handleCategorybox(2, 5)}
              </div>
            </div>

            <div className="carousel-item">
              <div className="productview">
                {handleCategorybox(13, 16)}
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#catagorycarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#catagorycarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </>
  )

}