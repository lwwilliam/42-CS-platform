import React from 'react';

function SignUp(){
  const url = window.location.href;
  let text = url;
  const myArray = text.split("/");
  let len = myArray.length;
  let id = myArray[len - 1];

  return (
    <body style={{ height: "100vh" }}>
      <iframe src={'https://docs.google.com/forms/d/e/1FAIpQLSf-3pXpR8t0KJyO574fnJXKA9thixmdokX4avnKpyYGicLo_w/viewform?usp=pp_url&entry.376365941=' + id + '&embedded=true'} title="Google Forms" frameborder="0" height="100%" width="100%">Loading…</iframe>
    </body>
  )
}

export default SignUp;
