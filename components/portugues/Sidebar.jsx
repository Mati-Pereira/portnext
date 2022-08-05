import Perfil from '../../img/perfil.jpg'
import InfoContainer from './InfoContainer';
import SocialNetwork from './SocialNetwork';
import Image from 'next/image';

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="img"><Image src={Perfil} alt='my-perfil' width={230} height={300}/></div>
      <p className="title">Desenvolvedor Front-End Júnior</p>
      <SocialNetwork />
      <InfoContainer />
      <a rel="noreferrer" href="https://drive.google.com/file/d/1QRhN1tggBMWRg0vUxq30ueRHcu1wAyli/view?usp=sharing" target="_blank" className="btn">Download Currículo</a>
    </aside >
  );
}

export default Sidebar;