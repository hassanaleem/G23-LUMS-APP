import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [domain, setDomain] = useState(
    "http://10.130.159.171:8000/api/testback/"
  );
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  async function getData() {
    await axios
      .get(domain)
      .then((res) => {
        setData(res.data);
        setFetched(true);
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  if (fetched == false) {
    getData();
    getData();
    getData();
  }
  // console.log(data);
  return (
    <View style={styles.container}>
      {
        <View>
          {fetched ? (
            <View>
              <Text>{data[0].name}</Text>
              <Text>{data[0].email}</Text>
              <Text>{data[0].age}</Text>
              <Text>{data[0].date}</Text>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
