# Website

My personal website re:made in [Remix](https://remix.run) with TailwindCSS.

![Website - Light mode](https://user-images.githubusercontent.com/5226773/199515273-d2113a54-1cf8-4a30-964c-9aff9fd2bbff.png)

![Website - Dark mode](https://user-images.githubusercontent.com/5226773/198899100-6f598e24-433f-4cd8-a476-b87190108af2.png)

## Development

Run the dev server:

```shellscript
pnpm dev
```

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm build`

- `build/server`
- `build/client`
