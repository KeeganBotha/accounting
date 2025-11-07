import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback="Loading...">
      <Container />
    </Suspense>
  );
}

async function Container() {
  return <div>Im a container</div>;
}
