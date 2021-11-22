import React, {useState, useEffect} from "react";
import axios from "axios";

export function DataFetching() {

    const accessToken = 6728050277235129;
    let id = 1;

    // const [posts, setPosts] = useState([]);

      for (var i = 0; i < 732; i++) id = i;

      useEffect(() => {
      axios.get(`https://superheroapi.com/api.php/${accessToken}/${id}`)
        .then (res => 
          console.log(res.data))
        .catch(err => console.log(err))}, [])
 
    return (
        <div>
            Hola mundi
        </div>
    );
  }
