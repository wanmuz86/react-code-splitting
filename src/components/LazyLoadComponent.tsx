import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { Suspense } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const LazyLoadComponent = () => {
  return (
    <div> 
        <ErrorBoundary>
    <Suspense fallback={<div>Loading component A....</div>}>
      <ComponentA />
    </Suspense>
    </ErrorBoundary>
    <ErrorBoundary>
    <Suspense fallback={<div>Loading component B...</div>}>
      <ComponentB />
    </Suspense>
    </ErrorBoundary></div>
  )
}

export default LazyLoadComponent