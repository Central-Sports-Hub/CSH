import React from "react";
import Event from "../../components/Venue";

const VenuePage = () => {
  const [venueData, setVenueData] = useState(null);

  useEffect(() => {
    fetch("/api/venue")
      .then((res) => res.json())
      .then((data) => setVenueData(data));
  }, []);

  const VenuePage = () => {
    return (
      <div>
        <h1>Venue Page</h1>
        <Venue {...venueData} />
      </div>
    );
  };
};
export default VenuePage;
