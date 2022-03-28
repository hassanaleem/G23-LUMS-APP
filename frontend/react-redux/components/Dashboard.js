import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [domain, setDomain] = useState(
    "http://10.130.39.207:8000/login?id=23100199&password=abc"
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
  }
  return (
    <View style={styles.container}>
      {
        <View>
          {fetched ? (
            <View>
              <Text>{data}</Text>
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
