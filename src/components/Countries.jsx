import React, {useState, useEffect} from 'react'
import { getCountries } from '../apis/countriesapp';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';


function Countries() {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  useEffect(() => {
    let pageNumber = Number(searchParams.get('page'));

    setLoading(true);
    
    getCountries(pageNumber)
    .then((data) => {
      setListOfCountries(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(()=> {
      setLoading(false);
    })


  },[]);

   
  return (
     <section>
      <div className='flex justify-around mb-10 mt-10'>
        <div > 
          <h2>View Countries</h2>
          <p>Page {Number(searchParams.get('page'))} of 5</p>
        </div>
        <select>
          <option value="Select Continent">Select Continent</option>
            </select>
            </div>
            <div className=''>
            <div className="flex flex-wrap gap-10 justify-center items-center">
           
            {listOfCountries.length > 0 && listOfCountries.map((country, index) => {
          return (
             <div key={index} className="items-center md:w-4/12 lg:w-2/12 justify-center">
              <img src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`} alt={country.name.common} className="w-[250px] items-center h-[120px]"/>
              <strong>{country.name.common}</strong>
             <p><strong>Capital</strong>: {country.capital}</p>
             <p><strong>Population</strong>: {country.population}</p>
               <p><strong>Region</strong>: {country.region}</p>
            </div>
           )})}
           {loading && <p>Loading...</p>}
           {(!loading && listOfCountries.length === 0) && <p>No countries available</p>}
         </div>
    </div>
    <Pagination searchParams={searchParams} setSearchParams={setSearchParams}/>
    {/* <Pagination/> */}
    </section>
   
   );
}
export default Countries;















