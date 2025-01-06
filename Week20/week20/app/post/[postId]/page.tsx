import React from 'react'
import { getData } from '../page'

async function SinglePost({params}: {params: {postId: string}}) {

    const postId = (await params).postId;

    const post = await getData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log(post);


  return (
    <div className='max-w-lg p-3 rounded-md bg-slate-900 flex flex-col gap-2 mx-auto mt-6'>
        <p>User : {post?.userId}</p>
        <b>{post?.title}</b>
        <p>{post?.body}</p>
    </div>
  )
}

export default SinglePost
