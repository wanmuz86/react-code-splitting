import React, { Component, ReactNode } from 'react';


interface ErrorBoundaryProps {
 children: ReactNode;
}


interface ErrorBoundaryState {
 hasError: boolean;
}


class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
 constructor(props: ErrorBoundaryProps) {
   super(props);
   this.state = { hasError: false };
 }


 static getDerivedStateFromError(): ErrorBoundaryState {
   return { hasError: true };
 }


 // We need access to this lifecycle to check id there is an error
 componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
   console.error('ErrorBoundary caught an error', error, errorInfo);
 }


 render() {
   if (this.state.hasError) {
    // Change whatever that you want over here
     return <div>Something went wrong.</div>;
   }


   return this.props.children;
 }
}


export default ErrorBoundary;
