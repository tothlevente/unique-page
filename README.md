# Unique page 🌎

Want a simple and effective way to present your GitHub profile online? This user-friendly template that automatically creates a personal website using your GitHub data. No more manual coding or complex setups. This project dynamically pulls your username, bio, and repositories, providing a clean and professional showcase of your work. Ideal for developers, designers, and anyone looking to highlight their GitHub activity. Get your personal website up and running in minutes.

## Setup guide:

To use your page, you will need to follow these steps:

1. Fork or download the unique-page repository.
2. Open the `.env` file.
3. Complete a `VITE_LICENSE`, `VITE_REPOSITORY` and `VITE_GITHUB_API_PATH` environment variables.

- `VITE_LICENSE` -> The place of your page license.
  Something similar looks like this: https://github.com/yourusername/page/blob/main/LICENSE

- `VITE_REPOSITORY` -> The place of your page repository.
  Something similar looks like this: https://github.com/yourusername/page

- `VITE_GITHUB_API_PATH` -> Your GitHub api path.
  Something similar looks like this: https://api.github.com/users/yourusername

4. Create a `.env.local` file.
5. Create a `VITE_TOKEN` environment variable.

- `VITE_TOKEN` -> Your unique access token.

That's it! Now you can use your page! 🎉

**How to create a token?**

You can find more information about tokens here:

- [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)
- [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

## Available scripts:

In the project directory, you can run:

- `npm run start`
- `npm run lint`
- `npm run preview`
- `npm run build`

## Used external sources:

- [Jotai](https://jotai.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev)
- [Josefin Sans (Google Fonts)](https://fonts.google.com/specimen/Josefin+Sans)
- [Josefin Sans Font (GitHub)](https://github.com/googlefonts/josefinsans)
- [React error boundary](https://www.npmjs.com/package/react-error-boundary)

## License:

- This project is licensed under [MIT](https://github.com/tothlevente/unique-page/blob/main/LICENSE).
- The used font is licensed under the [SIL Open Font License, Version 1.1](https://fonts.google.com/specimen/Josefin+Sans/license).

For more information please visit the license files.
