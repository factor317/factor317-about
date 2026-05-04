import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/factor317.html");
  }, []);
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      Loading factor317… If you are not redirected,{" "}
      <a href="/index.html">open the site</a>.
    </div>
  );
}
