
async function RestPost({params}: {params : {postId: string, rest: string[]}}) {

    const postParams = await params;

  return (
    <div>
      Rest
      {JSON.stringify(postParams)}
    </div>
  )
}

export default RestPost
