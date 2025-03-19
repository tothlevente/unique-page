import { introducingData, repositoriesData } from "./api/AtomApi";
import { ThemeProvider } from "@/context/ThemeContext";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useAtom } from "jotai";

import Repositories from "./components/repositories/Repositories";
import ErrorHandling from "./components/handling/ErrorHandling";
import Introducing from "./components/introducing/Introducing";
import Loading from "./components/loading/Loading";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

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
