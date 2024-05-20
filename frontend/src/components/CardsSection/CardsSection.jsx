import React, { useContext } from "react";
import "./CardsSection.css";
import MainContext from "../../context/Context";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const CardsSection = () => {
	const { data } = useContext(MainContext);
    const [search,setSearch]=useState("")
    const [sort,setSort]=useState(null)

    const [basket, setBasket] = useState(
        localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
      );
    
      useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
      }, [basket]);
    
      const addBasket = (id) => {
        const findBasketItem = basket.find((e) => e.id === id);
        if (findBasketItem) {
         
          const updatedBasket = basket.map((item) =>
            item.id === id
              ? {
                  ...item,
                  count: item.count + 1,
                  totalPrice: parseFloat(item.totalPrice) + parseFloat(item.price),
                }
              : item
          );
          setBasket(updatedBasket);
        } else {
         
          const newBasketItem = {
            ...item,
            count: 1,
            totalPrice: parseFloat(item.price),
          };
          setBasket([...basket, newBasketItem]);
        }
      };
    
	
	return (
		<section className="cards__section">
			<div style={{padding:"100px 0px"}} className="container">
                <div className="cards__section__btns d-flex gap-4 my-5">
                   <input value={search} onChange={(e)=>{
                    setSearch(e.target.value)
                   }} className="p-2" type="text" placeholder="Search to something" />

                     <div className="gap-3 d-flex">
                     <button onClick={()=>setSort({field:"title",asc:true})} className="btn btn-warning">A-Z</button>
                     <button onClick={()=>setSort({field:"title",asc:false})} className="btn btn-warning">Z-A</button>

                        </div>
                     <div className="gap-3 d-flex">
                     <button onClick={()=>setSort({field:"price",asc:true})} className="btn btn-primary">Low to High</button>
                     <button onClick={()=>setSort({field:"price",asc:false})} className="btn btn-primary">High to Low</button>
                     </div>
                     
                     <button onClick={()=>setSort(null)} className="btn btn-danger">Default</button>
                </div>
				<div className="cards__section__crds d-flex gap-5">
					{data.filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a,b)=>{
                        if (!sort) {
                             return 0
                        }
                        else if (sort.asc) {
                            return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
                        }
                        else if (!sort.asc) {
                            return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)
                        }
                    })
                    .map((item, index) => (
						<div key={index} class="card" style={{width: "320px",height:"420px"}}>
							<img width={"100%"} height={"240px"} src={item.image} class="card-img-top" alt="..." />
							<div class="card-body justify-content-center d-flex flex-column">
								<h5 class="card-title">{item.title}</h5>
								<p class="card-text">{item.price}$</p>
                                <div className="d-flex gap-3">
                                <Link onClick={() => addBasket(item.id)}>
                                
									<button className="btn btn-danger">Add to Cart</button>
								</Link>
                                <Link to={`/detail/${item._id}`}>
									<button className="btn btn-primary">Detail</button>
								</Link>
                                </div>
								
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardsSection;
