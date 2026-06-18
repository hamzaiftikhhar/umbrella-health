import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/busy-professionals")({
  component: () => <Outlet />,
});
