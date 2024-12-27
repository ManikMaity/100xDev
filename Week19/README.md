# NextJS

- NextJS is a React framework for building web applications.
- In nextjs we can create frontend and backend in one project.
- React dont give outof the box features like routing, authentication, etc.
- NextJS gives you these features out of the box.
- React is not SEO friendly. But nextjs is SEO friendly.
- Google Crawler can crawl website in internet. A react website will not be crawlable by google. But nextjs website will be crawlable by google. Because react initinal html is empty. But nextjs initinal html is not empty.

## NextJS Features

- In react we do Client Side Rendering (CSR)
- The data is fetched from server from client and then rendered in the client.
```bash
browser --> reactjs app --> index.html + main.js --> /blogs --> backned --> blogs.json --> Browser --> React render blogs.json in CSR
```
- Server Side Rendering (SSR)
- Data is come prefethed from server. The nextjs server fetch the data and make html and then sent the html.
```bash
browser --> nextjs app --> index.html with generated html from js and api response in nextjs server --> browser
```
## Jargons 
- We mostly use the src/app directory to write code.
- Inside src/app page.tsx is rendered in "/" route. -  http://localhost:3000/

- **file based routing** (page.tsx)
- inside the app if we create a `users folder` and inside that create `page.tsx` then http://localhost:3000/users will be rendered. `This is file based routing`

- **Waterfalling problem**
- In React, data loading can be slow if components fetch data one after another. In Next.js, data is fetched all at once on the server, making it faster before the page loads.

- **server side rendering**
- In nextjs we can use async functional component to fetch data from api.
- And give will give the data in the html not the json
```tsx
async function getBlogs() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { data };
}

async function Blogs () {
    
    const { data } = await getBlogs();

    return (
        <>
        <div>Learn Nextjs and Typescript from scratch</div>
        <div className="container mx-auto">
            {data.map((blog: {userId : number, id : number, title : string, body : string}) => (
                <div key={blog.id} className="border p-4 my-4">
                    <h2 className="font-bold">{blog.title}</h2>
                    <p className="text-sm text-red">{blog.body}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Blogs;
```

## Layout
- In nextjs we have a Layout component inside the src/app folder. layout is a component that is rendered in all the pages. We can use Layout component to add a header, footer, sidebar, etc.

<details>
<summary>Layout Component</summary>

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog app",
  description: "This is a blog app ",
  keywords: ["blog", "app", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="border-b border-gray-200 text-gray-400 h-10">
          <div className="container mx-auto flex items-center justify-between h-full">
            <div>Logo</div>
            <div className="flex space-x-4">
              <a href="/signin">Sign in</a>
              <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
```
</details>

- If we want to add layout to specific pages then we can use Layout component inside the pages main folder.
```bash
-----auth folder
    -----signin folder
       -----page.tsx
    -----signup folder
       -----page.tsx
    -----layout.tsx
```

## Server side in nextjs
- In next js we can also create backend in the same project.
- Fontend route may look like this `http://localhost:3000/user` and backend route may look like this `http://localhost:3000/api/user`

### Advantages
- Single codebase for frontend and backend.
-  No cors issues.
-  Easy to deploy.


### Loading while data is fetching in nextjs
- In nextjs we can use loading while data is fetching.
- But it is not good for SEO. becuase google clawler send req and see loading.
- But in some pages and component we can use loading while data is fetching. where crawler dont have accesses to like user details page.
- To implement loading in nextjs beside the `page.tsx` make a `loading.tsx` file.
<details>
<summary>loading.tsx</summary>

```tsx
import React from 'react'

function loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      Loading...
    </div>
  )
}

export default loading
```
</details>

### Server side in nextjs
- To make a api in nextjs we have to make folder requied for it. like `app/api/v1/user/details`
- then make a route.ts in side `app/api/v1/user/details/route.ts`
- Write a get route like this
```ts
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      })
}
```
- Now we can call `http://localhost:3000/api/v1/user/details` api from server page.
- We can also make `POST`, `PUT` and other req like this.
```ts
export function POST() {
  return NextResponse.json({
    "id": 1,
  });
}

export function PUT() {
  return NextResponse.json({
    "id": 1,
  });
}
```

### Req data in api
- To get req data in api we can use `req.json()` method.
```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {

    // body
    const {email, password} = await req.json();
    
    return NextResponse.json({
        message: "User created successfully",
        data: {
            email,
            password
        }
    });
}
```

### Add database in nextjs
- Get a postgres database from neon.tech.
- Install Prisma `npm i prisma` and `npx prisma init`
- Follow same [steps]('../../../Week18/README.md')
<details>
<summary>signup with prisma</summary>

```ts
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const client = new PrismaClient();

export async function POST(req : NextRequest) {
    try{
        const {email, password} = await req.json();

        const user = await client.user.create({
            data: {
                email : email,
                password : password
            }
        })
        
        return NextResponse.json({
            message: "User created successfully",
            data: user
        });
    }
    catch(error){
        return NextResponse.json({
            message: "Error creating user",
            error: error
        },
        {status: 500}
    
    );
    }
    
}
```
</details>

### Inssue - 
- When we are using remote database and runing nextjs app with `npm run dev` due to `hot reloading` then we create multiple connection to the database and it will throw error.
- To avoid this we can use singleton pattern.
- It the prisma client is already created then we can use it. if not then create new one.
```ts
// @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
```
- `hot reloading` is when you make changes to the code and it will apear without reloading the page.