import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484405,
      long: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://image.nuevayork.com/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484405,
      long: -73.9878531,
    },
    creator: "u2",
  },
];

export const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
