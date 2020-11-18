import React, { useState } from 'react'
import { HeaderTitle, Container, UserName } from './styles'
import Popover from 'react-popover';
import DropdownList from './DropdownList';
import { BiChevronDown, BiMenu } from 'react-icons/bi';
import ThemeToggle from './ThemeToggle';
import { useMediaQuery } from 'atomic-layout';
import { IconButton } from '../../components/Button';

type Props = {
    title: string;
    userName: string;
    onMenuClick: () => void;
}

const HeaderToolbar: React.FC<Props> = ({ title, userName, onMenuClick }) => {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const isMobileScreen = useMediaQuery({ maxWidth: 767 });

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {isMobileScreen && <IconButton style={{ marginRight: 10 }} onClick={onMenuClick}><BiMenu /></IconButton>}
                <HeaderTitle>{title}</HeaderTitle>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ThemeToggle />
                <Popover preferPlace="below" isOpen={popoverOpened} place="below"
                    onOuterAction={() => setPopoverOpened(false)}
                    body={<DropdownList />}>
                    <UserName onClick={() => setPopoverOpened((old) => !old)}>
                        {userName}
                        <BiChevronDown style={{ transition: '0.2s', transform: `rotate(${popoverOpened ? '180deg' : '0deg'})` }} />
                    </UserName>
                </Popover>
            </div>
        </Container>
    )
}

export default HeaderToolbar
