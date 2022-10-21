
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { useEffect } from 'react'
import Button from './components/Button'
import Navigation from './components/nav'
import Boost from './components/foot'
import Table from './components/head'
import Lable from './components/home'
import Cards from './components/card'
import Product from './components/product'
import Spans from './components/color'
import Kare from './list'


const followers=[{name:'Abirami', isFollowing : false},{name:'Rajipapa', isFollowing : false},
 {name:'jothika', isFollowing : false},{name:'smileySuba', isFollowing : false},
 {name:'kanmani', isFollowing : false},{name:'jo prince', isFollowing : false},
 {name:'v.s kani', isFollowing : false},{name:'Mathan', isFollowing : false},
 {name:'Meena', isFollowing : false},{name:'Gethzi', isFollowing : false}]

 
   
function App() {


const products=[{name:'back',price:500},{name:' Shoes',price:500},{name:'dress',price:500},
{name:'watch',price:500}]
const mobiles=[{name:'redmi',model:6},{name:'samsung',model:8},{name:'realme',model:5},
 {name:'honor',model:7}]

 const [productsState,setProductsState]=React.useState(mobiles);
  const[counter,setCounter]=React.useState(0)
  const [sidebarIsOn,setSidebarState] = React.useState(false)
  const [onColorChange,setColor]=React.useState(false)
  const [foll, setFoll]=React.useState(followers)

const  add = (currentIndex)=>{
  const updatedData = productsState.map((mobile, index)=>{
    if (currentIndex=== index){
      return {...mobile, addCart:mobile.addCart +1};
    }
    return mobile;
  });
  setProductsState(updatedData);
};


const minus=(currentIndex)=>{
  const updatedData = productsState.map((mobile, index)=>{
    if (currentIndex=== index){
      return {...mobile, addCart:mobile.addCart -1};
    }
    return mobile;
  });
  setProductsState(updatedData);
};

const handlecart=(currentIndex)=>{
  const updatedData = productsState.map((mobile, index)=>{
    if (currentIndex === index){
      return {...mobile, addCart: 1};
    }
    return mobile;
  });
  setProductsState(updatedData);
};
useEffect(()=>{
      
},[])

 function handlefollow(follower, index){
     console.log('index', index)
     console.log('follower', follower)
     const mutated = foll.map((follower, ind) => {
      if (ind === index)
      {
        return {...follower, isFollowing : !follower.isFollowing}
      }else{
        return follower
      }
     })

     setFoll([...mutated])

     console.log('mutated', mutated)

 }
console.log(foll)

  const backcolor=<h1 className='backcolor'onClick={(e)=>{
  e.preventDefault()
  setColor(true)
  }}>Change</h1>

const reset=<h1 className='reset' onClick={(e)=>{
 e.preventDefault()
setColor(false)}}>Reset</h1>



  const hamburger = <b className="hamburger"onClick={(e)=>{   
  e.preventDefault()
setSidebarState(true)
}}>MENU</b>
 
  const sidebar = <div className='sidebar'>
    <div className='sidebar_menu'>
      <h4>Menu</h4>
      <b onClick={(e)=>{
  e.preventDefault()
setSidebarState(false)}
}>close</b>
  </div>
  </div>


 const header =<div className="App" style={{backgroundColor : onColorChange ? 'violet':'pink'}}>
  <header>
  <div>
  <a href="https://vitejs.dev"target="_blank">
    <img src="/vite.svg"className="logo"control width="50px"/>
  </a>
  </div>
    <nav>
      <a href="home">HOME</a>
      <a href="about">ABOUT</a>
      <a href="service">SERVICE</a>
      <a href="Help">HELP</a>
      <button>login</button>
      {hamburger}
    </nav>
  </header>
  {backcolor}
   {reset}
</div>
const hero=<div><h1>hero</h1>
<div className='hero'>
<div>image</div>
</div>
</div>
const features=<div><h1>features</h1></div>

const renderProducts=products.map((product)=>{
  
  return(
    <div className='product_card'><h4>{product.name}</h4>
    <b>{product.price}</b>

    
    </div>
  )
})

const footer=<div><h1>footer</h1></div>

const increase = ()=>{
  setCounter(count=>count+1);
}
const decrease=() => {
  setCounter(count=>count-1);
}

const increment=()=>alert("hii");
const renderMobile=productsState.map((mobile, index)=>{
  return(
    <div className='mobile_card'><h2>{mobile.name}</h2>
    <h3>{mobile.model}</h3>
    <div className='counter'>
          <span className='counter_output'>{mobile.addCart}</span>
          {!mobile.addCart ?(
          <div className='btn_container'>
       <button className='control_btn'
       onClick={()=> handlecart(index)}>
        Add to cart
       </button>
        </div>
          ) : (
            <div className='btn_container'>
              <button className='control_btn' onClick={()=> add(index)}>
                +
              </button>
              <button className='control_btn' onClick={()=> minus(index)}>
                -
              </button>
            </div>
          )}
    </div>
    </div>
);
});
   

const renderFollowe=foll.map((followers, index)=>{

  return(
    <div className='follow_card'><h3>{followers.name}</h3>
    <div className='button'>
    <button onClick={()=>handlefollow(followers, index)}>{followers.isFollowing ? 'Unfollow' : 'Follow' }</button>
    </div>
    </div>
   
  )
})
 
  return (
    <React.Fragment>
      {sidebarIsOn && sidebar}
      {header}
  
      {hero}
       
      {features}
      <div className='product_section'>
        {renderProducts}
      </div>
      {footer}
      <div className='mobile_section'>
        {renderMobile}
      </div>
      <div className='follow_section'>
        {renderFollowe}
      </div>
      <Table/>
      <Navigation/>
      
     <Boost/>
     <Spans/>
    <Button>click</Button>
    <Lable/>
    {mobiles.map((mobile, index)=>{
      return(
        <Cards 
        key={index}
        name={mobile.name}
        model={mobile.model}
      increment={increment}
        />
      );
    })}
    <div className='pro'>
    {products.map((product,index)=>{
      return(
        <Product
        key={index}
        name={product.name}
        price={product.price}
        increment={increment}
    
        />
      );
    })}
    </div>
    <Kare/>
  
    </React.Fragment>
    
  )
  }

export default App

  