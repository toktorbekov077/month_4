import React from 'react';
import {useForm} from "react-hook-form";

function PostPage(props) {
    const {handleSubmit,
        register,
        formState: {errors}} = useForm()
    const submit = (data) => console.log(data)

    return (
        <div>
            <h1>create post</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                     <input style={errors.title && {border: 'solid red 1px'}}
                            {...register("title", {required:true})} placeholder={"title"} />
                </label>
                <input {...register("body", {required:true})} placeholder={"body"} className={errors.body && 'error'} />
                <input {...register("email")} placeholder={"email"}/>
                <button> send</button>
            </form>
        </div>
    );
}

export default PostPage;