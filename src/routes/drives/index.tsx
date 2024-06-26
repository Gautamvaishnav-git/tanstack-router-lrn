import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Podcast } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/drives/")({
  component: () => <PostsList />,
  loader: () => fetchPosts(),
  pendingComponent: () => (
    <div className="flex items-center flex-wrap gap-2 px-3 py-5">
      {Array.from({ length: 100 }).map((_, i) => (
        <Skeleton
          key={i.toString()}
          className={cn(
            "h-12 flex-grow min-w-32",
            Math.round(Math.random() * 10) % 2 === 0 ? "min-w-44" : "min-w-32"
          )}
        />
      ))}
    </div>
  ),
  errorComponent: () => <div>Error!</div>,
});

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostsList() {
  const [posts, setPosts] = useState<Posts[]>();

  Route.useLoaderData({ select: async (data) => data }).then((drive) => {
    setPosts(drive);
  });

  return (
    <>
      <ul className="flex flex-wrap py-5 px-3 gap-2">
        {posts?.map((post) => (
          <Link to="/drives/$driveID" key={post.id} params={{ driveID: post.id.toString() }}>
            <Button variant="outline" className="capitalize">
              <Podcast className="mr-2" /> {post.title}
            </Button>
          </Link>
        ))}
      </ul>
    </>
  );
}
