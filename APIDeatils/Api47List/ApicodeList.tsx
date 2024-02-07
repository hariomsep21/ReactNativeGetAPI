//this APi for get one user deatils

import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import GetDataInterface from "./interface";



export default function AppApiList(): React.JSX.Element {
  //const [data, setData] = useState<GetDataInterface>();    //this code for get only one record

  const [data, setData] = useState<GetDataInterface[]>([]);  //this code for get all records

  const GetAllAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const result = await res.json();


    console.warn(result);
    setData(result);
  }
  useEffect(() => {
    GetAllAPIData();
  }, []);
  return (<ScrollView>
    <Text style={{ fontSize: 30 }}>Hello Api</Text>

    {
      //this code for list of users details
      data ? data.map((item) =>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 30, backgroundColor: 'yellow' }}>UserId:{item.userId}</Text>
          <Text style={{ fontSize: 20 }}>Id:{item.id}</Text>
          <Text style={{ fontSize: 20 }}>Title:{item.title}</Text>
          <Text style={{ fontSize: 20 }}>Body:{item.body}</Text>
        </View>
      ) : null

      //this code for only one records of users details
      // data ? 
      //   <View style={{ margin: 10 }}>
      //     <Text style={{ fontSize: 30, backgroundColor: 'yellow' }}>UserId:{data.userId}</Text>
      //     <Text style={{ fontSize: 20 }}>Id:{data.id}</Text>
      //     <Text style={{ fontSize: 20 }}>Title:{data.title}</Text>
      //     <Text style={{ fontSize: 20 }}>Body:{data.body}</Text>
      //   </View>
      // : null
    }
    {/* <AppApi/> */}
  </ScrollView>);
}