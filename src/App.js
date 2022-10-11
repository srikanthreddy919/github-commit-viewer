import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import CommitViewer from "./components/CommitViewer";
import { QueryClient, QueryClientProvider } from "react-query";
import "./utils/timeAgo"; // Intialize javascript-time-ago plugin

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header />
      <QueryClientProvider client={queryClient}>
        <CommitViewer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
