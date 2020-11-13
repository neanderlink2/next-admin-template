import React, { useState } from 'react'
import { HeaderTitle, Container, UserName } from './styles'
import Popover from 'react-popover';
import DropdownList from './DropdownList';

type Props = {
    title: string;
    userName: string;
}

const HeaderToolbar: React.FC<Props> = ({ title, userName }) => {
    const [popoverOpened, setPopoverOpened] = useState(false);

    return (
        <Container>
            <HeaderTitle>{title}</HeaderTitle>
            <Popover preferPlace="below" isOpen={popoverOpened} place="below"
                onOuterAction={() => setPopoverOpened(false)}
                body={<DropdownList />}>
                <UserName onClick={() => setPopoverOpened((old) => !old)}>{userName}</UserName>
            </Popover>
        </Container>
    )
}

export default HeaderToolbar
