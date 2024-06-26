import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/drives/_layout-drives/quizzes")({
  component: () => (
    <div>
      <h1>Quizzes</h1>
      <p>
        Quizzes are a great way to test your knowledge and learn new things.
      </p>
    </div>
  ),
});
