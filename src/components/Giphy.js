import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import './Giphy.css'
function Giphy () {
    const [data, setData]=useState([])
    const [search, setSearch]=useState("")
    useEffect(()=>{

        const fetchData = async ()=>{
            const results= await axios("https://api.giphy.com/v1/gifs/trending",{
            params:{
                api_key:"yjh4xTpUFfJYvT3RW8ilxTuHeTcPsQVT"
                }
        });
        setData(results.data.data);
        console.log(results);
    }
    fetchData();
},[])

const renderGifs =()=>{
    return data.map(el =>{
        return(
            <div key={el.id} className="gifs">
            <img src={el.images.fixed_height.url} /> 
            </div>
        )
    })
}
const handleSearchChange = (event) =>{
    setSearch(event.target.value);
};
const handleSubmit = async (event)=>{
    event.preventDefault();
    const results=await axios("https://api.giphy.com/v1/gifs/search",{
        params:{
            api_key:"yjh4xTpUFfJYvT3RW8ilxTuHeTcPsQVT",
            q:search
            }
    });
    setData(results.data.data);

};
    return (
        <div>
        <form>
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
        >
          Go
        </button>
      </form>
            {renderGifs()}
        </div>
    );
};

export default Giphy;
