import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/drives/_layout-drives/info")({
  component: () => (
    <div>
      This is a drive info page!
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
        repudiandae commodi dicta animi numquam veritatis et eos necessitatibus
        aut, aliquid magnam amet illum officia ut expedita voluptatibus?
        Nesciunt, iste ex?
      </p>
    </div>
  ),
});
