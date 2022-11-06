import "./App.css";
import React from "react";
import { Navigation, ErrorFallback } from "./Exports/Exports";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navigation />
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;