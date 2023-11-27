import { useRouter } from "next/router";

export default function Hello() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Hello, {id}!</h1>
    </div>
  );
}
