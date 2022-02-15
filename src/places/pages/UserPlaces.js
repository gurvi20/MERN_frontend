import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
  {
    id: "p1",
    title: "place1",
    description: "working",
    image:
      "https://medias.momentfactory.com/2016/08/montreal-375th-birthday-anniversary-jacques-cartier-light-show-bridge.jpg",
    cooridinates: "montreal",
    location: {
      lng: 8.82,
      lat: 37.41,
    },
    creator: "u1",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
