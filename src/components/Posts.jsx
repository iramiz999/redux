
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/postsSlice";

function Posts() {

    const dispatch = useDispatch()
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    // console.log(title,description)

    const posts = useSelector((state) => state.posts.items)
    return (
        <div>
            <div className="form">
                <input

                    onChange={(e) =>
                        settitle(e.target.value)

                    }


                    type="text" placeholder="POST TITLE" />

                <input
                    onChange={(e) =>
                        setdescription(e.target.value)

                    }


                    type="text" placeholder="POST DESC" />
                <button
                    onClick={() => {
                        dispatch(addPost({ id: 1, title, description }))
                    }}

                >ADD POST</button>

            </div>


            <div className="posts">
                {posts.length > 0 ?

                    posts.map(post =>
                        <div className="post">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <button>EDIT</button>
                            <button onClick={() => dispatch(deletePost())} >DELETE</button>
                        </div>
                    ) : 'THERE IS NO POSTS'}

            </div>

        </div>
    )
}

export default Posts
