import Perfil from '../../img/perfil.jpg'
import InfoContainerEnglish from './InfoContainerEnglish';
import SocialNetworkEnglish from './SocialNetworkEnglish';
import Image from 'next/image';

function SidebarEnglish() {
  return (
    <aside id="sidebar">
      <Image src={Perfil} alt='my-perfil' style={{ 'width': '100px' }} />
      <p className="title">Junior Front-End Developer</p>
      <SocialNetworkEnglish />
      <InfoContainerEnglish />
      <a rel="noreferrer" href="https://drive.google.com/file/d/1QRhN1tggBMWRg0vUxq30ueRHcu1wAyli/view?usp=sharing" target="_blank" className="btn">Download Currículo</a>
    </aside>
  );
}

export default SidebarEnglish;