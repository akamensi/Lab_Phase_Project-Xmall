
import {  useDispatch, useSelector } from "react-redux"
import { Button, Form, Header, Image } from "semantic-ui-react"
import CradMarket from "./CardMarket"
import { getMarkets } from "../redux/Actions/MarketActions"
import { useEffect, useState } from "react"


const ListMarket=()=>{
    const options = [
    {  text: 'All', value: 'All' },
    {  text: 'Antiques' , value: 'Antiques'  },
    {  text: 'Artisanal' , value: 'Artisanal'  },
    {  text: 'Art' , value: 'Art'  },
    {  text: 'Baby' , value: 'Baby'  },
    {  text: 'Clothing, Shoes & accessories' , value: 'Clothing, Shoes & accessories'  },
    {  text: 'Computers & Networking' , value: 'Computers & Networking'  },
    {  text: 'Electronics & accessories' , value: 'Electronics & accessories'  },
    {  text: 'Food product' , value: 'Food product'  },
    {  text: 'Health & Beauty' , value: 'Health & Beauty'  },
    {  text: 'Home & Garden' , value: 'Home & Garden'  },
    {  text: 'Jewelry & Watches' , value: 'Jewelry & Watches'  },
    {  text: 'Real estate', value: 'Real estate' },
    {  text: 'various', value: 'various' }
        ]
    const [text,setText] = useState('')
    const [categorie,setCategorie] = useState('All')
    const dispatch = useDispatch()
useEffect(()=>{
dispatch(getMarkets())
},[])
    const token = localStorage.getItem('token') 
    const markets = useSelector(state => state.MarketReducer.markets)
    

    return(
        <div>
        <Header as='h2' color='teal' textAlign='center'>
        List of Markets
        </Header>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <Form.Input value={text} onChange={(e)=>setText(e.target.value)}   a iconPosition='left' placeholder='Search' />
        <Form.Select
        onChange={(e)=> setCategorie(e.target.innerText)}
        
            value={categorie}
            options={options}
            placeholder='Category'
            />
        <Button onClick={()=>{setText("");setCategorie('All')}}>Reset</Button>
        </div>
        <br />
        <br />
        <div className="centerCard">
        {
        markets.legth== 0 ? 
        
        <h3>No Markets</h3> 
        
        : 
        <>
            {
                categorie == "All" ?
                markets.filter(el=>  el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de market</h3> : markets.filter(el=>  el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Food product" ?
                markets.filter(el=> el.categorie == "Food product" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Food product" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Antiques" ?
                markets.filter(el=> el.categorie == "Antiques" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Antiques" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Artisanal" ?
                markets.filter(el=> el.categorie == "Artisanal" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Artisanal" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Art" ?
                markets.filter(el=> el.categorie == "Art" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Art" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "'Baby" ?
                markets.filter(el=> el.categorie == "'Baby" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "'Baby" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Clothing, Shoes & accessories" ?
                markets.filter(el=> el.categorie == "Clothing, Shoes & accessories" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Clothing, Shoes & accessories" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "'Health & Beauty" ?
                markets.filter(el=> el.categorie == "'Health & Beauty" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "'Health & Beauty" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Home & Garden" ?
                markets.filter(el=> el.categorie == "Home & Garden" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Home & Garden" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Jewelry & Watches" ?
                markets.filter(el=> el.categorie == "Jewelry & Watches" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Jewelry & Watches" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Computers & Networking" ?
                markets.filter(el=> el.categorie == "Computers & Networking" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Computers & Networking" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                categorie == "Electronics & accessories" ?
                markets.filter(el=> el.categorie == "Electronics & accessories" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "Electronics & accessories" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                :
                markets.filter(el=> el.categorie == "various" && el.marketName.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de markets</h3> : markets.filter(el=> el.categorie == "various" && el.marketName.toUpperCase().includes(text.toUpperCase())).map(el=><CradMarket key={el._id} el={el}/>)
                }
        </>
        }
        </div>
        </div>
    )
}


export default ListMarket