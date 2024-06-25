export default function SignIn() {
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
