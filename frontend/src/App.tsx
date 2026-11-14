import Routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MensajeRedirigir from "./assets/components/MensajeRedirigir";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
       <div className="z-999999 fixed right-5 bottom-20 lg:top-10">
          <MensajeRedirigir />
      </div>
    </QueryClientProvider>
  );
}

export default App;
