import React from 'react';

function Address(props) {
  // a fragment component, it puts their content in the caller element, without a parent tag
  return (
    <>
      <hr />
      <p>{props.data.street} {props.data.suite}, {props.data.city}. <b>C.P. {props.data.zipcode}</b></p>
      <p><i>Latitude:</i> {props.data.geo.lat}, <i>Longitude:</i> {props.data.geo.lng}</p>
    </>
  );
}

export default Address;
