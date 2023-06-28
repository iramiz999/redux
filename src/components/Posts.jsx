
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/postsSlice";

function Posts() {

    const dispatch = useDispatch()
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [edit, setisEdit] = useState(false);
    const [id, setid] = useState(null);

    const [updateTitle, setupdateTitle] = useState("");
    const [updateDesc, setupdateDesc] = useState("");

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
                        dispatch(addPost({ id: posts.length + 1, title, description }))
                    }}

                >ADD POST</button>

            </div>


            <div className="posts">
                {posts.length > 0 ?

                    posts.map(post =>
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <button onClick={() => {
                                setisEdit(true)
                                setid(post.id)

                            }



                            } > EDIT</button>
                            <button onClick={() => dispatch(deletePost())} >DELETE</button>

                            <br />
                            {edit && id == post.id && (
                                <>
                                    <input
                                        onChange={(e) => setupdateTitle(e.target.value)}

                                        type="text" placeholder="Updated Title" />
                                    <input
                                        onChange={(e) => setupdateDesc(e.target.value)} type="text" placeholder="Updated Desc" />
                                    <button
                                        onClick={() => {
                                            dispatch(updatePost({
                                                id: post.id,
                                                title: updateTitle,
                                                description: updateDesc
                                            }))
                                            setisEdit(false)
                                        }}
                                       
                                    >UPDATE</button>

                                </>


                            )}
                        </div>
                    ) : 'THERE IS NO POSTS'}


            </div>

        </div>
    )
}

export default Posts
