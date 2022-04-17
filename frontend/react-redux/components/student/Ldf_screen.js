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
import { Button, Icon } from "react-native-elements";
import { useFonts } from "expo-font";

import {
  getAllPosts,
  addPost,
  likePost,
  unlikePost,
  commentPost,
  deleteComment,
  deletePost,
} from "../../actions/postactions";
import { useDispatch, useSelector } from "react-redux";
export const Ldf = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });

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
  const [postOwner, setPostOwner] = useState(false);
  const [pp, setPp] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [comment, setComment] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [inputComment, setInputComment] = useState("");
  let userState = useSelector((state) => state.loginReducer);
  let user = userState.user.Id;
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
    for (let i = 0; i < postData.length; i++) {
      setFinalPost((finalPost) => [...finalPost, postData[i]]);
    }
    setSet2(false);
  }

  if (finalPost.length != 0 && pp.length == 0) {
    for (let i = 0; i < finalPost.length; i++) {
      pp.push(finalPost[i]);
    }
    setCurrentPost(pp[userIndex][postIndex].post);
    if (postKeys[postIndex] == user) {
      setPostOwner(true);
    }
    if (pp[userIndex][postIndex].comments != "") {
      let temp = pp[userIndex][postIndex].comments.split(",");
      setComment(temp);
    }
    if (pp[userIndex][postIndex].liker_id != "") {
      let lk = pp[userIndex][postIndex].liker_id.split(",");
      setLikes(lk.length);
      for (let i = 0; i < lk.length; i++) {
        if (lk[i] == user) {
          setLiked(true);
          break;
        }
      }
    }
  }

  const changePost = () => {
    if (
      userIndex + 1 >= pp.length &&
      postIndex + 1 > pp[userIndex].length - 1
    ) {
      setUserIndex(0);
      setPostIndex(0);
      setPostIndex(0);
      setCurrentPost(pp[0][0].post);
      setComment([]);
      setLikes(0);
      setLiked(false);
      if (pp[0][0].comments != "") {
        setComment(pp[0][0].comments.split(","));
      }
      if (pp[0][0].liker_id != "") {
        let lk = pp[0][0].liker_id.split(",");
        setLikes(lk.length);
        for (let i = 0; i < lk.length; i++) {
          if (lk[i] == user) {
            setLiked(true);
            break;
          }
        }
      }
      if (postKeys[0] == user) {
        setPostOwner(true);
      } else {
        setPostOwner(false);
      }
    } else if (postIndex < pp[userIndex].length - 1) {
      setCurrentPost(pp[userIndex][postIndex + 1].post);
      setComment([]);
      setLikes(0);
      setLiked(false);

      if (pp[userIndex][postIndex + 1].comments != "") {
        setComment(pp[userIndex][postIndex + 1].comments.split(","));
      }
      if (pp[userIndex][postIndex + 1].liker_id != "") {
        let lk = pp[userIndex][postIndex + 1].liker_id.split(",");
        setLikes(lk.length);
        for (let i = 0; i < lk.length; i++) {
          if (lk[i] == user) {
            setLiked(true);
            break;
          }
        }
      }
      if (postKeys[postIndex + 1] == user) {
        setPostOwner(true);
      } else {
        setPostOwner(false);
      }
      setPostIndex(postIndex + 1);
    } else {
      setCurrentPost(pp[userIndex + 1][0].post);
      setComment([]);
      setLikes(0);
      setLiked(false);

      if (pp[userIndex + 1][0].comments != "") {
        let temp = pp[userIndex + 1][0].comments.split(",");
        setComment(temp);
      }
      if (pp[userIndex + 1][0].liker_id != "") {
        let lk = pp[userIndex + 1][0].liker_id.split(",");
        setLikes(lk.length);
        for (let i = 0; i < lk.length; i++) {
          if (lk[i] == user) {
            setLiked(true);
            break;
          }
        }
      }
      if (postKeys[0] == user) {
        setPostOwner(true);
      } else {
        setPostOwner(false);
      }

      setPostIndex(0);
      setPostIndex(0);
      setUserIndex(userIndex + 1);
    }
  };

  const makePost = () => {
    if (newPost != "") {
      dispatch(addPost(user, newPost));
      setNewPost("");
      pp[userIndex].push({ post: newPost, comments: "", liker_id: "" }); /////////////////////////////////
      setPostKeys(postKeys.concat(user));
    }
  };
  const likePostFunc = () => {
    let postOwner = postKeys[userIndex];
    dispatch(likePost(user, postIndex, postOwner));
    setLikes(likes + 1);
    // update pp
    let temp = pp[userIndex][postIndex].liker_id;
    if (temp == "") {
      temp = user;
    } else {
      temp = temp + "," + user;
    }
    pp[userIndex][postIndex].liker_id = temp;
    setLiked(true);
  };
  const unlikePostFunc = () => {
    let postOwner = postKeys[userIndex];
    dispatch(unlikePost(user, postIndex, postOwner));
    setLikes(likes - 1);
    // update pp
    let temp = pp[userIndex][postIndex].liker_id;
    let temp2 = temp.split(",");
    let temp3 = "";
    for (let i = 0; i < temp2.length; i++) {
      if (temp2[i] != user) {
        temp3 = temp3 + temp2[i] + ",";
      }
    }
    temp3 = temp3.substring(0, temp3.length - 1);
    pp[userIndex][postIndex].liker_id = temp3;

    setLiked(false);
  };
  const postComment = () => {
    let postOwner = postKeys[userIndex];
    let commenterName = userState.user.Name;
    let newcomment = inputComment;
    dispatch(
      commentPost(postOwner, postIndex, newcomment, user, commenterName)
    );
    let update = commenterName + ": " + newcomment;
    setComment((comment) => [...comment, update]);
    let temp = pp[userIndex][postIndex].comments;
    if (temp == "") {
      temp = update;
    } else {
      temp = temp + "," + update;
    }
    pp[userIndex][postIndex].comments = temp;
    setInputComment("");
  };
  const removeComment = (del_comment) => {
    let postOwner = postKeys[userIndex];

    dispatch(deleteComment(postOwner, postIndex, del_comment));
    let index = 0;
    for (let i = 0; i < comment.length; i++) {
      if (comment[i] == del_comment) {
        index = i;
        break;
      }
    }
    let temp = pp[userIndex][postIndex].comments.split(",");
    let last = false;
    if (temp[temp.length - 1] == del_comment) {
      last = true;
    }
    if (last == true && temp[0] != del_comment) {
      pp[userIndex][postIndex].comments = pp[userIndex][
        postIndex
      ].comments.replace("," + del_comment, "");
    } else if (temp[0] == del_comment) {
      pp[userIndex][postIndex].comments = pp[userIndex][
        postIndex
      ].comments.replace(del_comment, "");
    } else {
      pp[userIndex][postIndex].comments = pp[userIndex][
        postIndex
      ].comments.replace(del_comment + ",", "");
    }

    setComment(pp[userIndex][postIndex].comments.split(","));
  };
  const deletePostFunc = () => {
    let owner = postKeys[userIndex];
    dispatch(deletePost(owner, postIndex));
    pp[userIndex].splice(postIndex, 1);
    setPostIndex(0);
    setUserIndex(0);
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button nav={navigation} />

        <Text style={styles.topheading}>Discussion Forum</Text>

        <View>
          <Post_bar
            bar_text="What's on your mind?"
            bar_value={newPost}
            onChangeText={(text) => setNewPost(text)}
            onPress={makePost}
          />
        </View>

        <View style={styles.Postview}>
          <Text style={styles.Posttext}>Post:</Text>
        </View>

        <View style={styles.rectangle2}>
          <ScrollView style={styles.PostTextRec}>
            <Text style={{ left: 6, top: 2, fontSize: 15, lineHeight: 20 }}>
              {" "}
              {currentPost}{" "}
            </Text>
          </ScrollView>
          
          {liked ? (
            
            <TouchableOpacity style={styles.likeButton} onPress={unlikePostFunc}>
              <Text style={styles.likeButtonText}>Unlike</Text>
            </TouchableOpacity>
          
          ) : (
          
            <TouchableOpacity style={styles.likeButton} onPress={likePostFunc}>
              <Text style={styles.likeButtonText}>Like</Text>
            </TouchableOpacity>
          
          )}

          {postKeys[userIndex] == user ? (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={deletePostFunc}
            >
              <Text style={styles.likeButtonText}>Delete</Text>
            </TouchableOpacity>
          ) : null}

          <Text style={styles.like}> Like: {likes}</Text>

          <View style={styles.CommentBar}>
            <Comment_bar
              bar_text="Follow up discussion"
              bar_value={inputComment}
              onChangeText={(text) => setInputComment(text)}
              onPress={postComment}
            />
          </View>

          <ScrollView style={styles.CommentBox}>
            {comment.map((data, index) => (
              <View key={index}>
                {data != "" ? (
                  <Text style={styles.CommentText}>{data} </Text>
                ) : null}
                {data.includes(userState.user.Name) ? (
                  <TouchableOpacity
                    style={styles.CommentDelete}
                    onPress={() => removeComment(data)}
                  >
                    <Text
                      style={{
                        position: "relative",
                        color: "red",
                        marginTop: -2,
                        marginLeft: width / 1.4,
                        fontStyle: "normal",
                      }}
                    >
                      X
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* <TouchableOpacity style={styles.nextButton} onPress={changePost}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity> */}
        
        <Main_button
          text="Next"
          onPress={changePost}
          horizontal_padding={0}
          margintop={height / 1.78}
          marginleft={width / 6}
          marginright={width / 6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 6}
          marginright={width / 6}
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
    fontFamily: "Outfit",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: height / 24,
    marginLeft: width / 13,
  },

  Postview: {
    position: "absolute",
    top: height / 4,
    left: width / 14,
  },

  Posttext: {
    fontSize: 28,
    marginLeft: width / 25,
    fontFamily: "Outfit",
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
    top: height / 3.4,
    left: width / 11,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
  },
  PostTextRec: {
    position: "absolute",
    width: width / 1.3,
    height: height / 11,
    top: height / 2.1 / 30,
    left: width / 11 / 3,
    borderRadius: 7,
    backgroundColor: "#bebebe",
    fontFamily: "Outfit",
  },
  CommentBar: {
    top: height / 15,
  },
  CommentText: {
    lineHeight: 20,
    fontSize: 15,
    left: width / width + 10,
    marginTop: 6,
    marginRight: 6,
  },

  CommentBox: {
    position: "absolute",
    width: width / 1.3,
    height: height / 8.4,
    top: height / 2.96 / 1.7,
    left: width / 11 / 3,
    borderRadius: 7,
    backgroundColor: "#bebebe",
  },
  nextButton: {
    position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 105,
    borderRadius: 30,
    backgroundColor: "#79c4f2",
    marginTop: height / 1.52,
    marginLeft: width / 6,
    marginRight: width / 6,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  nextText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },
  likeButton: {
    position: "absolute",
    marginTop: height / 8.9,
    left: width / 10 / 3,
    width: 52,
    height: 21,
    borderRadius: 5,
    backgroundColor: "#55A9E8",
    justifyContent: "center",
  },
  likeButtonText: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
    fontFamily: "Outfit",
  },
  like: {
    position: "absolute",
    top: height / 8.6,
    left: width / 5.5,
    fontSize: 11,
    textAlign: "center",
    fontFamily: "Outfit",
    marginLeft: 5,
  },
  deleteButton: {
    position: "absolute",
    marginTop: height / 8.9,
    left: width / 1.51,
    width: 52,
    height: 21,
    borderRadius: 5,
    backgroundColor: "#55A9E8",
    justifyContent: "center",
  },
});
