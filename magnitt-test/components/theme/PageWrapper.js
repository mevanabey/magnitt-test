import React from 'react';

const PageWrapper = ({ children }) => (
  <>
    <div className="page_wrapper">
        { children }
    </div>

    <style jsx>{`
      .page_wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: space-between;
        align-items: stretch;
        width: 100%;
        height: 100vh;
      }
    `}</style>
  </>
)

export default PageWrapper;
