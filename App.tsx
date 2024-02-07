//this APi for get one user deatils

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AppApi from "./APIDeatils/Api46/Apicode";
import AppApiList from "./APIDeatils/Api47List/ApicodeList"
import DemoApiList from "./APIDeatils/Demo/demoApiCode";
import DemoFlatApiList from "./APIDeatils/DemoWithFlatList/demoFlatApiCode";


export default function App():React.JSX.Element{

  return(<View>
    <Text style={{fontSize:30}}>Hello Flat List</Text>

    {/* Show Only One record */}
    {/* <AppApi/>  */}

    {/* Show List of records */}
    {/* <AppApiList/> */}

    {/* <DemoApiList/> */}

<DemoFlatApiList/>

  </View>);
}