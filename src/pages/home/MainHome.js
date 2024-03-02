import React, { useEffect } from 'react'
import Content from './components/Content'
import AboutMe from './components/AboutMe'
import { useSweetAlert } from '../../context/alerts/Sweetalert';

const MainHome = () => {
  const { githubLinks } = useSweetAlert();

  useEffect(() => {
    // githubLinks();
  }, [githubLinks])


  return (
    <main>
      <Content />
     
    </main>
  )
}

export default MainHome
