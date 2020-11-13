import { useEffect } from 'react';
import { useBreadcrumb } from '../components/BreadcrumbProvider';
import Layout from '../layout'


const IndexPage = () => {
  const { changeBreadcrumbs } = useBreadcrumb();
  
  useEffect(() => {    
    changeBreadcrumbs([
      { title: 'Principal', href: '/teste' },
      { title: 'Teste' }
    ]);
  }, [])
  return (
    <Layout>
      <p>oi</p>
    </Layout>
  )
}

export default IndexPage
