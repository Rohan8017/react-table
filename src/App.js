
import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Pagination from './component/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [sorType, setSortType] = useState('asc');
  const [sortName, setSortName] = useState('asc');
  const recordperPage=5;


  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch('https://dummyjson.com/products');
      const responceData = await responce.json();
      setData(responceData.products);
    }
    fetchData();
  }, []);

  const filteredData = [...data].filter((item) => {
    return item.brand.toLowerCase().includes(query.toLocaleLowerCase());
  })
  const [currentPage,setCurrentPage]=useState(1);
  const numberofPage=Math.ceil(filteredData.length/recordperPage);
  const numbers=[...Array(numberofPage+1).keys()].slice(1);
  const lastIndex=currentPage * recordperPage;
  const firstIndex=lastIndex - recordperPage;

  const paginatedData=filteredData.slice(firstIndex,lastIndex);

  const handleSort = (type) => {
    if (sorType === 'asc') {
      let sortedData = [...filteredData].sort((a, b) => {
        return a[type] - b[type];
      })
      setData(sortedData);
      setSortType('dsc');
    } else {
      let sortedData = [...filteredData].sort((a, b) => {
        return b[type] - a[type];
      })
      setData(sortedData);
      setSortType('asc');
    }
  }
  const handleSortName = (type) => {
    if (sortName === 'asc') {
      let Sortdata = [...data].sort((a, b) => {
        if (a[type] < b[type]) {
          return -1;
        }
        if (a[type] > b[type]) {
          return 1;
        }
        return 0;
      })
      setData(Sortdata);
      setSortName('dsc');
    }
    else {
      let Sortdata = [...data].sort((a, b) => {
        if (a[type] > b[type]) {
          return -1;
        }
        if (a[type] < b[type]) {
          return 1;
        }
        return 0;
      })
      setData(Sortdata);
      setSortName('asc');
    }
  }
  const handlePrevpage=()=>{
    if(currentPage !==1){
      setCurrentPage((currentPage)=>currentPage-1)
    }
  }
  const handleNextpage=()=>{
    if(currentPage !==numberofPage){
      setCurrentPage((currentPage)=>currentPage+1)
    }
  }
  const setPage=(pageno)=>{
    setCurrentPage(pageno);
  }

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} />
      <Body 
        paginatedData={paginatedData} 
        handleSort={handleSort} 
        handleSortName={handleSortName} 
        sorType={sorType}
        sortName={sortName}
      />
      <Pagination 
        numbers={numbers}
        handlePrevpage={handlePrevpage}
        handleNextpage={handleNextpage}
        setPage={setPage}
        currentPage={currentPage}
        numberofPage={numberofPage}
      />
    </div>
  );
}

export default App;
