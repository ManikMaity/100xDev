import Link from "next/link";

export async function getData(url : string) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
} 

async function Post() {

    const data = await getData("https://jsonplaceholder.typicode.com/posts");



  return (
    <div>
      <h1>Posts</h1>

<div className="flex flex-col gap-2">
      {data.map((post: any) => (
        <Link href={`/post/${post.id}`} key={post.id} className="border p-2 rounded-md cursor-pointer">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Link>
      ))}
</div>
    </div>
  )
}

export default Post
