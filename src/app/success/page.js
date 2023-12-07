import Link from "next/link";
export default function Success() {
  return (
    <div className="container">
      <main>
        <h1>Submission Received!</h1>
        <p>
          Thank you for contacting us we will reach out to you soon
          <Link href="/">
            <a>home page</a>
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
