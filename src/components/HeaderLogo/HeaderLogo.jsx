import logo from '../../assets/svg/logo.svg';
import saferuard from '../../assets/svg/safeguard.svg';


const HeaderLogo = () => {
    return (
        <div className='flex items-center'>
            <div className='mr-2'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <img src={saferuard} alt="saferuard" />
            </div>
        </div>
    )
}

export { HeaderLogo };