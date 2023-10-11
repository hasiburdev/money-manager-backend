import Link from "next/link"

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to our backend</h1>
      <Link href={"/docs"}>View Swagger Docs</Link>
    </main>
  );
}

export default HomePage;
