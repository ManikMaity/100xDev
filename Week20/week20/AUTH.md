# Authentication in nextjs

### Authentication options
- External Authentication - Clerk, Auth0, Firebase
- Internal Authentication - JWT, Cookies
- NextAuth

### Why cant use JWT and localStorage
- Because the nextjs is server side rendererd so, for the first req it dont have access to the local storage because it is only available on the client side.
- So we need to use JWT and cookies.
