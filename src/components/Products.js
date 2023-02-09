import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const[data, setData]=useState([]);
    const[filter,setFilter]=useState(data);
    const[loading, setLoading]=useState(false);
    let componentMounted=true;

    useEffect(()=>{
        const getProduct=async ()=>{            
            setLoading(true);
            const response=await fetch('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json()); 
                setLoading(false);
                console.log(response)
            }
            return()=>{
                componentMounted=false
            }
         
        }
        getProduct();
    },[])
    const Loading=()=>{
        return(
            <>
            Loading....
            </>
        )           
        
    }
    const filterProduct=(cat)=>{
        const updatedList=data.filter((x)=>x.category===cat);
        setFilter(updatedList);
    }
    const ShowProduct=()=>{
        return(
            <>
                <div className='button'>
                    <button className="btn btn-outline-dark sm me-4" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark sm me-4" onClick={()=>filterProduct(`men's clothing`)}>Men's Clothing</button>
                    <button className="btn btn-outline-dark sm me-4" onClick={()=>filterProduct(`women's clothing`)}>Women's Clothing</button>
                    <button className="btn btn-outline-dark sm me-4" onClick={()=>filterProduct(`jewelery`)}>Jewelery</button>
                    <button className="btn btn-outline-dark sm me-4" onClick={()=>filterProduct(`electronics`)}>Electronics</button>
                </div>
                {filter.map((product)=>{
                    return(
                        <>
                            <div className="col-md-3 mt-4 latest-product">
                                 <div className="card">
                                    <img src={product.image} className="card-img-top" alt={product.title}/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{product.title}</h5>
                                        <p className='card-text'>{product.category}</p>
                                        <p className='card-text'>${product.price}</p>
                                        <p className='lead'>Rating {product.rating && product.rating.rate}
                                        <i className='fa fa-star'/>
                                        </p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                 </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
 
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h1 className='text-center'>Latest Product</h1>
                <hr />
                <div className='justify-content-center row'>
                    {loading?<Loading/>:<ShowProduct/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
