import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { BundleProvider } from './BundleContext.jsx';
import { AuthProvider } from './UserContext.jsx';


//CREATE CLIENT
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BundleProvider>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </BundleProvider>
  </AuthProvider>

)
