import { LiveReload, Outlet } from "remix";

function root() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Remix Jokes App</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default root;
