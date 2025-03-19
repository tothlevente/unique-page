import IntroducingProps from "@/interfaces/IntroducingProps";
import RepositoryProps from "@/interfaces/RepositoryProps";

import { atom } from "jotai";

/**
 * The base path for the API, retrieved from the environment variable `VITE_GITHUB_API_PATH`.
 * This value is injected at build time using Vite's `import.meta.env` mechanism.
 *
 * @constant
 * @type {string | undefined}
 */
const API_PATH = import.meta.env.VITE_GITHUB_API_PATH;

/**
 * The `TOKEN` constant retrieves the value of the `VITE_TOKEN` environment variable
 * from the `import.meta.env` object. This token is typically used for authentication
 * or API access purposes in the application.
 *
 * @constant
 * @type {string | undefined}
 * @see https://vitejs.dev/guide/env-and-mode.html#env-files for more details on Vite environment variables.
 */
const TOKEN = import.meta.env.VITE_TOKEN;

/**
 * Atom to fetch and store introducing data asynchronously.
 *
 * This function fetches data from the API specified by the `API_PATH` constant
 * and uses the `TOKEN` constant for authorization. If either `API_PATH` or
 * `TOKEN` is not defined, an error is thrown.
 *
 * @throws {Error} If `API_PATH` or `TOKEN` is not defined.
 * @returns {Promise<IntroducingProps>} A promise that resolves to the fetched data.
 */
export const introducingData = atom(async () => {
  if (!API_PATH || !TOKEN) {
    throw new Error(
      "API_PATH or TOKEN is not defined. Did you manages the .env.local and .env files? Did you add the VITE_GITHUB_API_PATH and VITE_TOKEN variables?"
    );
  }

  const response = await fetch(API_PATH, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const data: IntroducingProps = await response.json();
  return data;
});

/**
 * Atom to fetch and store repository data from the API.
 *
 * This atom asynchronously fetches a list of repositories from the API
 * endpoint defined by `API_PATH` and authenticates the request using the
 * `TOKEN`. The fetched data is expected to conform to the `RepositoryProps[]` type.
 *
 * @throws {Error} If `API_PATH` or `TOKEN` is not defined.
 *
 * @returns {Promise<RepositoryProps[]>} A promise that resolves to an array of repository data.
 */
export const repositoriesData = atom(async () => {
  if (!API_PATH || !TOKEN) {
    throw new Error(
      "API_PATH or TOKEN is not defined. Did you manages the .env.local and .env files? Did you add the VITE_GITHUB_API_PATH and VITE_TOKEN variables?"
    );
  }

  const response = await fetch(API_PATH + "/repos", {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const data: RepositoryProps[] = await response.json();
  return data;
});
