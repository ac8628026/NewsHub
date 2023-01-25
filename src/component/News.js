import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spinar from './Spinar';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
 
   const [articles, setarticles] = useState([])
   const [loading, setloading] = useState(true)
   const [page, setpage] = useState(1)
   const [totalResults, settotalResults] = useState(0)

  const update = async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=id&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
      setloading( true)
      let data = await fetch(url)
      let pers = await data.json()
      
        setarticles(pers.articles)
        setloading(false)
        settotalResults(pers.totalResults)
    
   }
  
 useEffect(()=>{update();}
 )

  const nexPage = async () => {
    console.log("next page");
    let url = `https://newsapi.org/v2/top-headlines?country=id&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;
    setloading( true)
    let data = await fetch(url);
    let pers = await data.json()
    setarticles(pers.articles)
    setpage(page+1)
    setloading(false)

}
 const prePage = async () => {
    console.log("pre page");
    let url = `https://newsapi.org/v2/top-headlines?country=id&category=${props.category}&apiKey=${props.apikey}&page=${page - 1}&pageSize=${props.pagesize}`;
    setloading( true)

    let data = await fetch(url);
    let pers = await data.json()
    setarticles(pers.articles)
    setpage(page-1)
    setloading(false)
}
   const fetchMoreData=async()=>{
    setpage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=id&category=${props.category}&apiKey=${props.apikey}&page=${page }&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let pers = await data.json()
    setarticles(articles.concat(pers.articles))
    settotalResults(pers.totalResults)
 
  }
  
 
    return (
      <>
        <div className="container mt-2">
          <h1 className='text-center'>Letest News</h1>
          

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== 100}
            loader={ <Spinar />}
          >  
          
           <div className='container'>
              <div className="row">
                {articles.map((element) => {
                  return (
                    <><div className="col-md-4" >
                      <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                    </>
                  )
                })}

              </div>
            </div>
            </InfiniteScroll>
            </div>

           

          </>
          )
  
}
export default  News