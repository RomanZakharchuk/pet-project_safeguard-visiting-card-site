import { HeaderLogo, HeaderNavigation } from '../../components';

const Header = () => {
    return (
        <div className="flex items-center justify-between pt-10 px-[4%]">
            <HeaderLogo />
            <HeaderNavigation />
        </div>
    )
}

export { Header };