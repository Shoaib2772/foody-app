import { useState } from "react";
import Header from "./Header";
import Herosec from "./Herosec";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <Herosec searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
