import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../Components/components.css";
import Layout from '../Components/layout';
import MyClubTile from '../Components/MyClubTile';
import search from '../assets/icons/search.svg';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function MyClubs() {
  const urlParam = new URLSearchParams(window.location.search);
  const key = urlParam.get('code');
  const [objid, setObjid] = useState('');
  // const [loading, setLoading] = useState(true);
  const [joinedClubsinfo, setJoinedClubsinfo] = useState({
    clubname: [],
    description: [],
    redir_link: []
  });

  useEffect(() => {
    // Define the postCode function inside the useEffect
    const postCode = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/postCode`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(key),
        });
        if (response.ok) {
          const data = await response.json();
          setObjid(data.objectid);
          if (data.objectid) {
            localStorage.setItem('id', data.objectid);
            // Store the objectid in local storage
          }
        } else {
          console.error('Failed to send code to the backend.');
        }
      } catch (error) {
        console.error('Error sending code:', error);
      }
    };

    postCode();
  }, [key, objid]);

  const id = localStorage.getItem('id');

  useEffect(() => {
    // setTimeout(() => setLoading(false), 3000)
    axios.get(`${BACKEND_URL}/api/user/getUserJoinedClubs?userID=${id}`)
      .then(response => {
        setJoinedClubsinfo(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

    // handles the search bar
  const [query, setQuery] = useState("")
	const [searchResults, setSearchResults] = useState([])

  // onChange handler returns a synthetic event object
	const handleSearchInputChange = (event) => {
    setQuery(event.target.value)
	};

  // useEffect filters and updates search results based on query change
	useEffect(() => {
    setSearchResults(joinedClubsinfo.clubname.filter((club) => {
			return (club.toLowerCase().includes(query.toLowerCase()))
		}))
	}, [query, joinedClubsinfo.clubname])

  return (
		<>
			<Layout>
				<div className="w-full flex flex-col justify-center items-center">
					<div className="lg:flex w-[80%] py-8 md:py-16 items-center justify-between">
						<div className="font-poppins font-bold md:text-5xl text-4xl md:mb-auto mb-6">
							Your Clubs
						</div>
						<div className="md:flex">
							<button className="bg-[#99DEFF] md:px-16 md:py-4 py-2 md:text-2xl text-xl font-poppins font-semibold rounded-2xl shadow-lg mr-10 md:mb-0 mb-3 md:w-auto w-full trasnform hover:scale-110">
								Filter
							</button>
							<div className="relative">
								<input
									type="text"
									id="myInput"
									placeholder="Search"
									title="Type in a name"
									className="bg-[#E3E1E1] text-black md:pl-10 md:pr-16 md:py-4 py-2 md:text-2xl text-xl font-poppins font-medium rounded-3xl shadow-lg w-full border-[#E3E1E1]"
									onChange={handleSearchInputChange}
								/>
								<img
									src={search}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer md:w-10 w-6"
									alt="Search Icon"
								/>
							</div>
						</div>
					</div>
					<div className="flex w-[80%] py-8 items-center">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 w-full">
							{searchResults.map((clubname, index) => (
								<MyClubTile
									key={index}
									clubName={clubname.replaceAll("_", " ")}
									clubPosition="Committee"
								/>
							))}
						</div>
					</div>
				</div>
			</Layout>
		</>
  );
}

export default MyClubs;