# Authentication in nextjs

### Authentication options
- External Authentication - Clerk, Auth0, Firebase
- Internal Authentication - JWT, Cookies
- NextAuth

### Why cant use JWT and localStorage
- Because the nextjs is server side rendererd so, for the first req it dont have access to the local storage because it is only available on the client side.
- So we need to use JWT and cookies.

### Next Auth
- We can do authentication using Next Auth
- `app -> api -> auth -> [...nextauth] -> route.ts`
- Inside that give the provider detail- 
```ts
import NextAuth from "next-auth"

const handler = NextAuth({
  providers : []
})

export {handler as GET, handler as POST};
```
- Next auth login using credential provier.
```ts
providers : [
    CredentialsProvider({
        name : "Email",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Manik Maity" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {

            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
              return user
            } else {
              return null
      
            }
          }
    })
  ]
```
- It will automically make a signin page to signin. in `http://localhost:3000/api/auth/signin`
- **client component way-**
- In page.tsx we can use `useSession` hook to to get the data after signin.
- It return a object with `data` which include the return credentials, and `status`
```ts
function RealHome() {
  const session = useSession();
  console.log(session)
  return (
    <div>
      {session?.status == "authenticated" ? (
        <button onClick={() => signOut()}>Signout</button>
      ) : (
        <button onClick={() => signIn()}>Signin</button>
      )}
    </div>
  );
}
```
- But to this work we have to make the componennt "use client" and wrap it inside `<SessionProvider>`
```ts
function Home() {
  return <SessionProvider><RealHome/></SessionProvider>
}
```
- **Server Component way-**
- To use this in server component we have to use `getServerSession`
```ts
async function Home() {
  const session = await getServerSession();
  console.log(session);

  return <div>{JSON.stringify(session)}</div>;
}

export default Home;
```
- But to use this we have to include `secret` inside `NextAuth`.
```ts
const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { name: "manikmaity", id: "1", email: "manik@gmail.com" };
        return user;
      },
    }),
  ],
});
```