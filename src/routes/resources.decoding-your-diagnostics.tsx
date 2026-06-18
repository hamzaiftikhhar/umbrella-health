import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/decoding-your-diagnostics")({
  component: () => <Outlet />,
});
