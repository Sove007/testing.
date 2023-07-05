import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loading from "./Loading";

function Home() {
  const [item, setItems] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users "
        );

        setItems(data);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      {load && <Loading />}
      {item.map((i) => (
        <Card
          key={i.id}
          name={i.name}
          email={i.email}
          phone={i.phone}
          company={i.company.name}
          website={i.website}
          street={i.address.street}
          suite={i.address.suite}
          city={i.address.city}
          zipCode={i.address.zipcode}
        />
      ))}
    </div>
  );
}
export default Home;
