import React, { useState } from 'react'
import { HeaderTitle, Container, UserName } from './styles'
import Popover from 'react-popover';
import DropdownList from './DropdownList';
import { BiChevronDown } from 'react-icons/bi';
import ThemeToggle from './ThemeToggle';

type Props = {
    title: string;
    userName: string;
}

const HeaderToolbar: React.FC<Props> = ({ title, userName }) => {
    const [popoverOpened, setPopoverOpened] = useState(false);

    return (
        <Container>
            <HeaderTitle>{title}</HeaderTitle>
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
