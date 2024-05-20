import React, { useContext } from 'react'
import "./AddProduct.css"
import { Formik } from 'formik';
import HeroSection from '../../../components/HeroSection/HeroSection';
import MainContext from '../../../context/Context';

const AddProduct = () => {
  const {data,setData}=useContext(MainContext)
  
  return (

   
    <>
    <div className='container d-flex justify-content-center mt-5 flex-column align-items-center'> 
    <h1 className='mb-5'>Bir sey elave et</h1>
      <Formik
       initialValues={{ image: '', title: '',price: '' }}
       validate={values => {
         
       }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:8080/api/products",{
          image: values.image,
          title: values.title,
          price: values.price
        }
        ).then((res)=>{
           setData([...data,res.data])
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       }) => (
         <form  onSubmit={handleSubmit}>
           <input
           style={{color:"black"}}
            className='p-2 border-1 m-lg-2'
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder='Image ureym'
           />
           {errors.image && touched.image && errors.image}
           <input
           style={{color:"black"}}
            className='p-2 border-1 m-lg-2'
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
             placeholder='Title ureym'
             
           />
           {errors.title && touched.title && errors.title}

           <input
           style={{color:"black"}}
            className='p-2 border-1 m-lg-2'
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
             placeholder='Price ureym'
           />
           {errors.price && touched.price && errors.price}

           <button className='btn btn-primary' type="submit" >
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
    </>
    
  )
}

export default AddProduct
