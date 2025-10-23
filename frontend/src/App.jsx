import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import LMSLoginPage from './pages/LMSLoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with layout */}
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/courses" element={
          <Layout>
            <CoursesPage />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <AboutUsPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactUsPage />
          </Layout>
        } />
        
        {/* LMS Login page without layout */}
        <Route path="/login" element={<LMSLoginPage />} />
        
        {/* 404 Page */}
        <Route path="*" element={
          <Layout>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-8">Page not found</p>
                <a href="/" className="btn-primary">Go Home</a>
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
