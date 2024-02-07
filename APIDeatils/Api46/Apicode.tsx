//this APi for get one user deatils

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import GetDataInterface from "./interface";


export default function AppApi():React.JSX.Element{
const[data,setApiData]=useState<GetDataInterface | null>(null); 


const GetApiData=async ()=>{
  const url="https://jsonplaceholder.typicode.com/posts/1";   //APi url
  const res=await fetch(url);                                //fetch data from url
  const result:GetDataInterface=await res.json();           //result convert into json formate and store in result with implement in interface

  setApiData(result); //update data
}

useEffect(()=>{
  GetApiData();
})

  return(<View>
    <Text style={{fontSize:30}}>Hello Api</Text>
    {
data ? <View>
<Text style={{fontSize:30}}>{data.userId}</Text>
<Text style={{fontSize:30}}>{data.id}</Text>
<Text style={{fontSize:30}}>{data.title}</Text>
<Text style={{fontSize:30}}>{data.body}</Text>
</View> :null
    }
  </View>);
}