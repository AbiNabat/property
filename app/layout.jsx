import '@/assets/styles/global.css';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export  const metadata = {
    title: 'Property| Find The Perfect Rental',
    description: 'The Perfect Rental',
    keywords: 'rental, find rental, find rental, find rental',
}
const MainLayout = ({children}) => {
    return (
        <html lang="en">
        <body>
        <NavBar/>
        <div>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}

export default MainLayout;