import { useEffect } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { useBreadcrumb } from '../components/BreadcrumbProvider';
import Layout from '../layout'


const IndexPage = () => {
  const { changeBreadcrumbs } = useBreadcrumb();
  useEffect(() => {
    changeBreadcrumbs([
      { title: 'Início', icon: <BiHomeAlt /> },
    ]);
  }, []);
  return (
    <Layout>
      <p>Essa é a página inicial</p>
      <p>Utilize a navegação ao lado para verificar outras telas.</p>
    </Layout>
  )
}

export default IndexPage
