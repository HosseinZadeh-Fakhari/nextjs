import MainHaeder from './MainHaeder'
import MainFooter from './MainFooter'
import MainHead from './MainHead'

 const Layout = ({children}) => {
  return (
    <div>
        <MainHead/>
        <MainHaeder/>
        <main>
          {children}
        </main>
        <MainFooter/>
    </div>
  )
}
export default Layout
