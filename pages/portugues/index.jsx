import MainContent from '../../components/portugues/MainContent';
import Sidebar from '../../components/portugues/Sidebar';
import Link from 'next/link';

function App() {
    return (
        <div id="portifolio">
            <div className="link">
                <h1 className="h1">Matheus Rodrigues</h1>
                <h1 className='h1-mobile'>Matheus</h1>
                <h1 className='h1-mobile'>Rodrigues</h1>
                <Link href="/english">
                    <a className="btn">English</a>
                </Link>
            </div>
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default App;