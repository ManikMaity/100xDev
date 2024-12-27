async function getBlogs() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { data };
}

async function Blogs () {
    
    const { data } = await getBlogs();

    return (
        <>
        <div className="text-2xl font-bold text-center">Learn Nextjs and Typescript from scratch</div>
        <div className="container mx-auto">
            {data.map((blog: {userId : number, id : number, title : string, body : string}) => (
                <div key={blog.id} className="border p-4 my-4">
                    <h2 className="font-bold">{blog.title}</h2>
                    <p className="text-sm font-thin text-gray-100">{blog.body}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Blogs;