import React from 'react'
import { useEffect,useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showurl } from './Store/CategorySlice';
import Spinner from 'react-bootstrap/Spinner';
 const Category = () => {
    const dispatch = useDispatch();
let navigate=useNavigate()
    let[categoryitem,setcategoryitem]=useState([])
    let url='https://dummyjson.com/products/categories'

    let Categorydata=async()=>{
       try
       {
        let cat=await fetch(url)
        let catg=await cat.json()
        // console.log(catg)
        setcategoryitem(catg)
       }
       catch(err)
       {
        console.log(err)
       }
    }
    useEffect(()=>{
        Categorydata()
    },[])
let selectcategory=(a)=>{
    // console.log(a)
    dispatch(showurl(a))
    navigate('/Categorydata')
}
const categoryImages = {
  beauty: "https://th.bing.com/th/id/OIP.sgEPnH_2ojDLdUEQvk1ykwHaJF?rs=1&pid=ImgDetMain",
  fragrances: "https://th.bing.com/th/id/OIP.prn-4IE5zqMT10pcBmDE2wHaJh?w=183&h=180&c=7&r=0&o=5&dpr=2&pid=1.7g",
  furniture: "https://th.bing.com/th/id/OIP.Xbxgf1tYne0ArGBFyeWN6wHaDj?rs=1&pid=ImgDetMain",
  groceries: "https://th.bing.com/th/id/OIP.pV5ExWWzyHuvkpGPS4u74AHaHa?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "home-decoration": "https://th.bing.com/th/id/OIP.6bniyXfcnArqrURhlsI2DQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "kitchen-accessories": "https://th.bing.com/th/id/OIP.P04ywmQj03lJVf4idSSmVgHaHw?w=181&h=189&c=7&r=0&o=5&dpr=2&pid=1.7",
  laptops: "https://th.bing.com/th/id/OIP.DnOVbKIXOeQw2vE-Sj0t0wHaHZ?w=195&h=193&c=7&r=0&o=5&dpr=2&pid=1.7",
  "mens-shirts": "https://th.bing.com/th/id/OIP.2oxbiP6nnf5TQdW0Oox2qAHaIB?w=197&h=214&c=7&r=0&o=5&dpr=2&pid=1.7",
  "mens-shoes": "https://th.bing.com/th/id/OIP.lBsb-SY7wA8hPpry21OEFwHaEq?w=216&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "mens-watches": "https://th.bing.com/th/id/OIP.vAffMjpUPlKiFrXRjsxOuwHaKY?w=153&h=215&c=7&r=0&o=5&dpr=2&pid=1.7",
  "mobile-accessories": "https://images.macrumors.com/t/_cJRSR8_xhh0EXFkNnkspEFfGpQ=/1600x/article-new/2019/05/bestiphoneaccessoriesguide.jpg",
  motorcycle: "https://th.bing.com/th/id/OIP.NsHVIcw2XiURaVK6PINF7AHaGU?w=251&h=214&c=7&r=0&o=5&dpr=2&pid=1.7",
  "skin-care": "https://th.bing.com/th/id/OIP.D1NwHeXkNjTeW4jOLBC4UQHaHa?w=201&h=201&c=7&r=0&o=5&dpr=2&pid=1.7",
  smartphones: "https://th.bing.com/th/id/OIP._HOuc0Cnl4XtKsZlUFHQ1gHaF6?w=246&h=197&c=7&r=0&o=5&dpr=2&pid=1.7",
  "sports-accessories": "https://th.bing.com/th/id/OIP.kr1kontmpUVLtSLkDlMxpAHaD3?rs=1&pid=ImgDetMain",
  sunglasses: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg",
  tablets: "https://th.bing.com/th/id/OIP.DJV9RBYQirGn2MkutjiMcQHaHZ?rs=1&pid=ImgDetMain",
  tops: "https://th.bing.com/th/id/OIP.3d4C0UrrVvmGCvt7jiSSCAHaHl?w=139&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  vehicle: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg",
  "womens-bags": "https://th.bing.com/th/id/OIP.ErA041PGWHXFkoCocFIJ-AHaHa?w=189&h=189&c=7&r=0&o=5&dpr=2&pid=1.7",
  "womens-dresses": "https://images.pexels.com/photos/936192/pexels-photo-936192.jpeg",
  "womens-jewellery": "https://th.bing.com/th/id/OIP.mG9wWBnjvlsKyEgY8qyTJAAAAA?w=137&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "womens-shoes": "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  "womens-watches": "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
  "womens-jeans": "https://images.pexels.com/photos/2560892/pexels-photo-2560892.jpeg"
};




console.log(categoryImages['laptops'],"k")
  return <>

<div className="container mt-4">
            {
              categoryitem.length>0 ?(<Row className="p-3">
                { categoryitem.map((element, index) => (
              
                    <Col key={index} md={4} className="mb-4">
                            {/* {console.log(element)}
                          {console.log(element.slug)} */}
                        <Card className="shadow-lg category-card h-100">
                        <Card.Img
                                    variant="top"
                                    src={categoryImages[element.slug] || 'https://via.placeholder.com/300?text=No+Image'}

                                    alt={element}
                                    className="img-fluid"
                                    style={{ height: '200px', objectFit: 'contain',width:"100%" }}
                                />
                            <Card.Body className="text-center">
                                <Card.Title className="fw-bold text-uppercase">
                                    {element.name}  {/* ✅ Use name instead of object */}
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer className="text-center bg-white border-0">
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={()=>{selectcategory(element.url)}}
                                >
                                    Show Products
                                </button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>):(<div className="d-flex justify-content-center align-items-center w-100">
                  <Spinner animation="border" variant="primary" />
              </div>)
            }
        </div>
  </>
}
export default Category;

