import React, { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import SEO from './components/SEO/SEO';
import Loading from './components/Loading/Loading';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

// Lazy load heavy components
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Interests = lazy(() => import('./components/Interests/Interests'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  useEffect(() => {
    // Initialize Intersection Observer for all scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    // We need to re-observe when lazy loaded components mount, 
    // but MutationObserver is better for that. 
    // For now, simpler is better: re-run this logic or use a MutationObserver.
    // However, since we are just lazy loading, the initial load might miss them.
    // Let's use a simpler delegation or run it periodically?
    // Actually, simply observing document.body for class mutations or just
    // ensuring components add the class themselves is better. 
    // But sticking to the existing pattern:

    // Quick fix: Run observer on existing elements
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    // Use MutationObserver to watch for new nodes added by Suspense
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            if (node.classList && node.classList.contains('scroll-animate')) {
              observer.observe(node);
            }
            // Also check children
            const children = node.querySelectorAll && node.querySelectorAll('.scroll-animate');
            if (children) {
              children.forEach(child => observer.observe(child));
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <SEO />
        <Navigation />
        <main>
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Experience />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Certifications />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Interests />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
