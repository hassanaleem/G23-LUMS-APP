import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Post_bar } from "../Post_bar/Post_bar";
import { Comment_bar } from "../CommentBar/Commentbar";
const { width, height } = Dimensions.get("screen");
import { getAllPosts } from "../../actions/postactions";
import { useDispatch, useSelector } from "react-redux";
export const Ldf = ({ navigation }) => {
  const dispatch = useDispatch();
  const [fetch, setFetch] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [set, setSet] = useState(false);
  const [set2, setSet2] = useState(false);
  const [postData, setPostData] = useState([]);
  const [postKeys, setPostKeys] = useState([]);
  const [finalPost, setFinalPost] = useState([]);
  const [currentPost, setCurrentPost] = useState("");
  const [userIndex, setUserIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  const [postOwner, setPostOwner] = useState("");
  const [pp, setPp] = useState([]);
  const [comment, setComment] = useState([]);
  if (fetch == false) {
    dispatch(getAllPosts());
    setFetch(true);
  }
  let data = useSelector((state) => state.postReducer);
  if (data.msg == "FETCHED" && posts.length == 0) {
    setPosts(data.data);
  }
  if (posts.length != 0 && set == false) {
    let keys = Object.keys(posts);
    let values = Object.values(posts);
    setPostData(values);
    setPostKeys(keys);
    setSet(true);
    setSet2(true);
  }
  if (set2 == true) {
    //console.log(postData[1]);
    //console.log(postKeys[1]);
    for (let i = 0; i < postData.length; i++) {
      //console.log(postData[i], postKeys[i]);
      // push postData[i] to finalPost
      //console.log(i);
      setFinalPost((finalPost) => [...finalPost, postData[i]]);
    }
    setSet2(false);
  }
  // //console.log(finalPost);

  const temp = {
    0: {
      comments:
        "Comment 1,Comment 2 ,Comment 3 ,Comment 4,Comment 5,Comment 6,Comment 7",
      liker_id: "23100193,23100186,23100199",
      post: "Post 1",
    },
    1: {
      comments: "Hello 1,Hello 2 ,Hello 3 ,Hello 4,Hello 5,Hello 6,Hello 7",
      liker_id: "23100193,23100186,23100199",
      post: "Post 2",
    },
    2: {
      comments: "Hi 1,Hi 2 ,Hi 3 ,Hi 4,Hi 5,Hi 6,Hi 7",
      liker_id: "23100193,23100186,23100199",
      post: "Post 3",
    },
  };
  var CommentsArray = [];
  var liker_id = [];
  var post = [];
  // let pp = [];
  //console.log(finalPost.length, pp.length);
  if (finalPost.length != 0 && pp.length == 0) {
    for (let i = 0; i < finalPost.length; i++) {
      pp.push(finalPost[i]);
    }
    // //console.log(pp, "UWU");
    setCurrentPost(pp[userIndex][postIndex].post);
    // console.log(pp[userIndex][postIndex].comments,"HE");
    if (pp[userIndex][postIndex].comments != "") {
      setComment(pp[userIndex][postIndex].comments.split(","));
    }
    //console.log("HERE");
  }
  const makeComments = () => {
    //split pp[userIndex][postIndex].comments on ,
    //split pp[userIndex][postIndex].liker_id on ,
  };
  const [loop, setLoop] = useState(false);
  const changePost = () => {
    // make a set again bool to make it circular
    if (
      userIndex + 1 >= pp.length &&
      postIndex + 1 > pp[userIndex].length - 1
    ) {
      // //console.log("here");
      setUserIndex(0);
      setPostIndex(0);
      setPostIndex(0);
      setCurrentPost(pp[0][0].post);
      setComment([]);
      if (pp[0][0].comments != "") {
        setComment(pp[0][0].comments.split(","));
      }
    } else if (postIndex < pp[userIndex].length - 1) {
      setCurrentPost(pp[userIndex][postIndex + 1].post);
      setComment([]);

      if (pp[userIndex][postIndex + 1].comments != "") {
        setComment(pp[userIndex][postIndex + 1].comments.split(","));
      }
      setPostIndex(postIndex + 1);
    } else {
      setCurrentPost(pp[userIndex + 1][0].post);
      setComment([]);

      if (pp[userIndex + 1][0].comments != "") {
        setComment(pp[userIndex + 1][0].comments.split(","));
      }
      setPostIndex(0);
      setPostIndex(0);
      setUserIndex(userIndex + 1);
      // setCurrentPost(pp[userIndex + 1][0].post);
    }
  };
  // console.log(userIndex, postIndex, currentPost, pp.length);
  {
    Object.entries(temp).map(
      ([key, value]) => (
        CommentsArray.push(value.comments.split(",")),
        liker_id.push(value.liker_id.split(",")),
        post.push(value.post)
      )
    );
  }
  const [buttonPressed, setButtonPress] = useState(0);
  if (buttonPressed == CommentsArray.length) {
    Alert.alert("hello");
    setButtonPress(0);
  }

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button />

        <Text style={styles.topheading}> DISCUSSION FORM </Text>
        <View>
          <Post_bar bar_text="What's on your mind?" />
        </View>
        <View style={styles.Postview}>
          <Text style={styles.Posttext}>Post:</Text>
        </View>

        <View style={styles.rectangle2}>
          <ScrollView style={styles.PostTextRec}>
            <Text style={{ left: 5, top: 4, fontSize: 15, lineHeight: 20 }}>
              {" "}
              {currentPost}{" "}
            </Text>
          </ScrollView>

          <View style={styles.CommentBar}>
            <Comment_bar bar_text="Follow up discussion" />
          </View>

          <ScrollView style={styles.CommentBox}>
            {comment.map((data, index) => (
              <View key={index}>
                <Text style={styles.CommentText}>{data}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.likeButton} onPress={changePost}>
          <Text style={styles.likeText}> Next </Text>
        </TouchableOpacity>

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.5}
          marginleft={50}
          marginright={47}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    height: "100%",
  },

  topheading: {
    position: "absolute",
    top: height / 24,
    left: width / 30,
    fontSize: 27,
    lineHeight: 37.8,
    fontWeight: "bold",
  },
  Postview: {
    position: "absolute",
    top: height / 3.8,
    left: width / 14,
  },
  Posttext: {
    fontSize: 28,
  },
  logoutbuttonview: {
    position: "absolute",
    top: 50,
    right: 10,
  },

  rectangle2: {
    position: "absolute",
    width: width / 1.2,
    height: height / 3,
    top: height / 3.2,
    left: width / 11,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
  },
  PostTextRec: {
    position: "absolute",
    width: width / 1.3,
    height: height / 10,
    top: height / 3.2 / 30,
    left: width / 11 / 3,
    borderRadius: 7,
    backgroundColor: "#bebebe",
  },
  CommentBar: {
    top: height / 25,
  },
  CommentText: {
    lineHeight: 20,
    fontSize: 15,
    left: width / width + 2,
    marginTop: 4,
    marginRight: 4,
  },

  CommentBox: {
    position: "absolute",
    width: width / 1.3,
    height: height / 7.4,
    top: height / 3.2 / 1.7,
    left: width / 11 / 3,
    borderRadius: 7,
    backgroundColor: "#bebebe",
  },
  likeButton: {
    position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 80,
    borderRadius: 30,
    backgroundColor: "#79c4f2",
    marginTop: height / 1.52,
    marginLeft: width / 4.5,
    marginRight: width / 12,
  },
  likeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
