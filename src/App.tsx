import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ContentPage } from './pages/ContentPage';
import { cn } from './lib/utils';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onSearchClick={() => setIsSearchOpen(true)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main
          className={cn(
            'flex-1 transition-all duration-300',
            isSidebarOpen ? 'lg:ml-0' : 'lg:ml-0',
            'min-h-[calc(100vh-3.5rem)]'
          )}
        >
          <div className={cn(
            'mx-auto py-6 sm:py-8',
            isHome ? '' : 'px-4 sm:px-6 lg:px-8'
          )}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Front Matter */}
              <Route path="/foreword" element={<ContentPage />} />
              <Route path="/preface" element={<ContentPage />} />
              
              {/* Unit 1: Techniques and Methods */}
              <Route path="/unit1/chapter1" element={<ContentPage />} />
              <Route path="/unit1/chapter2" element={<ContentPage />} />
              <Route path="/unit1/chapter3" element={<ContentPage />} />
              <Route path="/unit1/chapter4" element={<ContentPage />} />
              <Route path="/unit1/chapter5" element={<ContentPage />} />
              <Route path="/unit1/chapter6" element={<ContentPage />} />
              <Route path="/unit1/chapter7" element={<ContentPage />} />
              <Route path="/unit1/chapter8" element={<ContentPage />} />
              <Route path="/unit1/chapter9" element={<ContentPage />} />
              <Route path="/unit1/chapter10" element={<ContentPage />} />
              <Route path="/unit1/chapter11" element={<ContentPage />} />
              
              {/* Unit 2: Development of Basic Skills */}
              <Route path="/unit2/chapter12" element={<ContentPage />} />
              <Route path="/unit2/chapter13" element={<ContentPage />} />
              <Route path="/unit2/chapter14" element={<ContentPage />} />
              <Route path="/unit2/chapter15" element={<ContentPage />} />
              <Route path="/unit2/chapter16" element={<ContentPage />} />
              <Route path="/unit2/chapter17" element={<ContentPage />} />
              <Route path="/unit2/chapter18" element={<ContentPage />} />
              
              {/* Unit 3: Evaluation Techniques */}
              <Route path="/unit3/chapter19" element={<ContentPage />} />
              <Route path="/unit3/chapter20" element={<ContentPage />} />
              <Route path="/unit3/chapter21" element={<ContentPage />} />
              <Route path="/unit3/chapter22" element={<ContentPage />} />
              <Route path="/unit3/chapter23" element={<ContentPage />} />
              <Route path="/unit3/chapter24" element={<ContentPage />} />
              
              {/* Reference Material */}
              <Route path="/reference/speaking-skills" element={<ContentPage />} />
              <Route path="/reference/proverbs" element={<ContentPage />} />
              <Route path="/reference/lesson-plans" element={<ContentPage />} />
            </Routes>
          </div>
        </main>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
