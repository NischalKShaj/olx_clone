import { createContext, useState } from "react";

export const PostContext = createContext(null);

const Post = ({ children }) => {
  const [postDetail, setPostDetail] = useState();
  return (
    <PostContext.Provider value={{ postDetail, setPostDetail }}>
      {children}
    </PostContext.Provider>
  );
};

export default Post;
