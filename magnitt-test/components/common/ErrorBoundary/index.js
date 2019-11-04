import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }
  
    render() {
      const { hasError } = this.state;
      const { children } = this.props;

      if (hasError) {
        return (
          <>
            <p>Oops, Something went wrong. Please try reloading the page.</p>

            <style jsx>{`
              p {
                color: #ccc;
                font-size: 14px;
                text-align: center;
                width: 100%;
              }
            `}</style>
          </>
      );
      }
  
      return children; 
    }
  }

  export default ErrorBoundary;