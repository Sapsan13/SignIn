import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

export default function SignIn({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <form method="post" action="/api/auth/signin/email">
      <label>
        Email address
        <input type="email" id="email" name="email" />
      </label>
      <button type="submit">Sign in with Email</button>
    </form>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
