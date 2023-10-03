import HeaderCategory from "../Components/categorypage/Headercategory/HeaderCategory"
import BooksCategory from '../Components/categorypage/bookscategory/category'
import NavBar from "../Components/Navbar/Navbar"
import Footer from "../Components/footer/footer"
const Category = () => {
  return (
    <div>
      <NavBar />
      <HeaderCategory />
      <BooksCategory />
      <Footer/>
    </div>
  )
}

export default Category
