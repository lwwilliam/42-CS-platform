import React, {useState, useEffect} from 'react';
import "../Components/components.css";
// import Loading from '../Components/LoadingOverlay';
import axios from 'axios';
import Layout from '../Components/layout';
import Card from '../Components/Cards';
import search from '../assets/icons/search.svg';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function ClubInfo() {
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => setLoading(false), 3000)
    axios.get(`${BACKEND_URL}/api/googleSheets`)
    .then(response => {
      setInfo(response.data.message);
      setFilteredInfo(response.data.message);
      // console.log(response.data.message);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const filterClubsByName = (query) => {
    const filteredData = {};

    Object.keys(info).forEach((category) => {
      const categoryClubs = info[category].filter((club) =>
        club.Name.toLowerCase().includes(query.toLowerCase())
      );

      if (categoryClubs.length > 0) {
        filteredData[category] = categoryClubs;
      }
    });

    return filteredData;
  };

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    const filteredClubs = filterClubsByName(inputValue);
    setFilteredInfo(filteredClubs);
  };

  return (
    <>
    {/* {loading && <Loading/>} */}
    <Layout>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='lg:flex w-[80%] py-8 md:py-16 items-center justify-between'>
          <div className='font-poppins font-bold md:text-5xl text-4xl'>All Clubs & Societies</div>
          <div className='md:flex pt-4 md:pt-0'>
            <button className='bg-[#99DEFF] md:px-16 md:py-4 py-2 md:text-2xl text-xl font-poppins font-semibold rounded-2xl shadow-lg mr-10 md:mb-0 mb-3 md:w-auto w-full trasnform hover:scale-110'>Filter</button>
            <div className='relative'>
              <input type="text" id="myInput" placeholder="Search" title="Type in a name" 
                className='bg-[#E3E1E1] text-black md:pl-10 pl-5 md:pr-16 md:py-4 py-2 md:text-2xl text-xl font-poppins font-medium rounded-3xl shadow-lg w-full border-[#E3E1E1]'
                onChange={handleSearchInputChange}
              />
              <img src={search} className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer md:w-10 w-6' alt="Search Icon"/>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div>
            {Object.entries(filteredInfo).map(([category, item], index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='text-3xl font-poppins font-bold md:py-6 py-4 w-[80%]'>{category}</div>
                <div className='md:grid grid-cols-2 gap-y-10 gap-x-20 w-[80%] md:my-6 my-2'>
                  {item.map((club, clubindex) => (
                    <Card club={club} key={clubindex}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
}

export default ClubInfo;
