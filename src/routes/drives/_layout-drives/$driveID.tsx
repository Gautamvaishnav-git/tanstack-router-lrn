import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

interface Drive {
  driveID: string;
  title: string;
}

export const Route = createFileRoute("/drives/_layout-drives/$driveID")({
  component: () => <Drive />,
  loader: ({ params }) => fetchDrive(params),
  pendingComponent: () => <>Fetching Drive</>,
  errorComponent: ({ error, reset, info }) => (
    <>
      <h1>Failed to fetch drive</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>Retry</button>
      <pre>{JSON.stringify(info)}</pre>
    </>
  ),
});

function Drive() {
  const [drive, setDrive] = useState<Post>();

  Route.useLoaderData({ select: async (data) => data }).then((drive) => {
    setDrive(drive);
  });

  return (
    <div className="p-10 bg-secondary w-1/2 mx-auto">
      <h1 className="font-bold text-3xl">{drive?.title}</h1>
      <p>{drive?.body}</p>
    </div>
  );
}

const fetchDrive = async (params: Record<string, string>) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.driveID
  );
  const data = await response.json();
  return data as Post;
};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
