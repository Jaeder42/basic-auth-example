import { basicAuthCheck } from "../lib/auth";

export default function Home() {
  return (
    <div>
      <h1>{`You're in buddy`}</h1>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;

  await basicAuthCheck(req, res);

  return {
    props: {},
  };
}
