import Link from "next/link";

export default async function PostListPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // reverse the posts array if the sort parameter is set to descending
  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2>Post List</h2>
      <Link href="/posts2?sort=asc">Sort ascending</Link> -{" "}
      <Link href="/posts2?sort=desc">Sort descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
