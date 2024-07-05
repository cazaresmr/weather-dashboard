import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      setRecentSearches([...recentSearches, city]);
      setCity("");
    }
  };

  return (
    <div className='home'>
      <h1>Weather Dashboard</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter city name'
        />
        <button type='submit'>Search</button>
      </form>
      <h2>Recent Searches</h2>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>
            <Link to={`/weather/${search}`}>{search}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
