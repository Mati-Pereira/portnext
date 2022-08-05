import MainContentEnglish from "../../components/english/MainContentEnglish";
import SidebarEnglish from "../../components/english/SidebarEnglish";
import Link from "next/link";

function English() {
    return (
        <div id="portifolio">
            <div className="link">
                <h1 className="h1">Matheus Rodrigues</h1>
                <h1 className='h1-mobile'>Matheus</h1>
                <h1 className='h1-mobile'>Rodrigues</h1>
                <Link href="/portugues">
                    <a className="btn">Português</a>
                </Link>
            </div>
            <SidebarEnglish />
            <MainContentEnglish />
        </div>
    );
}

export default English;