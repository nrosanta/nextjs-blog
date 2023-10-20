![Tech Stack](public/images/msh-nextjs.png)

## Installation 

Install the dependencies by running the following command.

```bash
npm install
# or
yarn install
```

Finally, run the following command to start the development server.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Note**: You have to create a `.env` file in the root directory and add the following environment variables to get the Spotify integration working.

```bash
SPOTIFY_CLIENT_ID=yourspotifyclientid
SPOTIFY_CLIENT_SECRET=yourspotifyclientsecret
SPOTIFY_REFRESH_TOKEN=yourspotifyrefreshtoken
```

You can get the `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/). You can get the `SPOTIFY_REFRESH_TOKEN` from [Spotify Web API Console](https://developer.spotify.com/console/get-recently-played/).

## Inspiration

I have used the following websites as inspiration for building this website.

- [Delba - delba.dev](https://delba.dev/)
- [Lee Robinson - leerob.io](https://leerob.io/)
- [Manu Arora - manuarora.in](https://manuarora.in/)
- [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

The styles of the website are inspired by the [Spotlight](https://spotlight.tailwindui.com/) theme design by [Tailwind UI](https://tailwindui.com/).
