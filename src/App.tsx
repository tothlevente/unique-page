import { introducingData, repositoriesData } from "./api/AtomApi";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useAtom } from "jotai";

import Repositories from "./components/contents/Repositories";
import Introducing from "./components/contents/Introducing";
import ErrorHandling from "./components/error-handling";
import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";
import Loading from "./components/loading";

export default function App() {
  const [{ name, bio, avatar_url, html_url }] = useAtom(introducingData);
  const [repositories] = useAtom(repositoriesData);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <ErrorBoundary fallback={<ErrorHandling />}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Introducing
            name={name}
            bio={bio}
            avatar_url={avatar_url}
            html_url={html_url}
          />
          <Repositories repositories={repositories} />
        </Suspense>
        <Footer name={name} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
