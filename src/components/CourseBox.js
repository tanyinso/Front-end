import { Link } from "react-router-dom"


const CourseBox = ({title,image,desc,id}) => {
     return (
          <Link className="box" to=''>
               <i className="fas fa-play"></i>
               <h2 className="title">{title}</h2>
               <img src={image} alt="" className="thumb" />
               <h3>{desc}</h3>
               <Link to='/mtn-payment' className="option-btn">Buy course</Link>
          </Link>
     )
}

export default CourseBox
