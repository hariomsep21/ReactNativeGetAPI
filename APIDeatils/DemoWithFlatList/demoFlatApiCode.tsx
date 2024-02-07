import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import GetDataInterface from "./interface";

export default function DemoFlatApiList(): React.JSX.Element {
    const [data, setData] = useState<GetDataInterface[]>([]);

    const getAllAPIData = async () => {
        try {
            const url = 'http://10.0.2.2:5199/api/Student/GetListofStudent';
            const res = await fetch(url);
            const result: GetDataInterface[] = await res.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getAllAPIData();
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Hello Api Update</Text>
            {data.length > 0 ?
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View key={item.id} style={{ margin: 10 }}>

                            <Text style={{ fontSize: 30, backgroundColor: 'yellow' }}>Id: {item.id}</Text>
                            <Text style={{ fontSize: 20 }}>StdId: {item.stateID}</Text>
                            <Text style={{ fontSize: 20 }}>FullName: {item.fullName}</Text>
                            <Text style={{ fontSize: 20 }}>Phone: {item.phone}</Text>
                            <Text style={{ fontSize: 20 }}>GenderName: {item.genderName}</Text>
                        </View>
                    }
                />: (
                    <Text>No data available</Text>
                )}
        </View>
    );
}
