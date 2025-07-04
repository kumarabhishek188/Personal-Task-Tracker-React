import { useEffect } from 'react';

const MobileOptimizations = () => {
  useEffect(() => {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    const preventZoom = (event) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Add touch event listeners
    document.addEventListener('touchend', preventZoom, false);

    // Prevent pull-to-refresh on mobile
    const preventPullToRefresh = (e) => {
      if (e.touches.length !== 1) return;
      
      const touch = e.touches[0];
      const startY = touch.clientY;
      
      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const currentY = touch.clientY;
        const diff = currentY - startY;
        
        // Prevent pull-to-refresh when scrolling up
        if (diff > 0 && window.scrollY === 0) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchstart', preventPullToRefresh, { passive: false });

    // Add viewport meta tag for better mobile experience
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    }

    // Cleanup
    return () => {
      document.removeEventListener('touchend', preventZoom);
      document.removeEventListener('touchstart', preventPullToRefresh);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MobileOptimizations; 