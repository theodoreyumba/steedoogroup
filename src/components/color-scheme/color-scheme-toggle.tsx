
import {
    Text,
    Combobox,
    useCombobox,
    InputBase,
    useMantineColorScheme,
    MantineColorScheme,
    Center,
    useMantineTheme,
    Group,
} from '@mantine/core'
import { useIsomorphicEffect } from '@mantine/hooks'
import { IconSun, IconMoon, IconBrightnessFilled } from '@tabler/icons-react'
import { useState } from 'react'

export function ColorSchemeToggle() {
    const { colorScheme, setColorScheme } = useMantineColorScheme()
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    })

    const [mounted, setMounted] = useState(false);
    const theme = useMantineTheme();

    useIsomorphicEffect(() => {
        setMounted(true);
    }, []);

    const selectedColorScheme = () => {
        if (!mounted) {
            return null; 
        }

        switch (colorScheme) {
            case 'light':
                return <Group><IconSun size={22} color={theme.colors.yellow[7]}/><Text> Light</Text></Group>;
            case 'dark':
                return <Group><IconMoon size={22} color={theme.colors.blue[6]}/><Text> Dark</Text></Group>;
            default:
                return <Group><IconBrightnessFilled size={22} /><Text> Auto</Text></Group>;
        }
    };

    return (
        <Combobox
            radius="md"
            store={combobox}
            onOptionSubmit={(val) => {
                setColorScheme(val as MantineColorScheme)
                combobox.closeDropdown()
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    variant="unstyled"
                    radius="md"
                    size='lg'
                    pointer
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                >
                    <Center>{selectedColorScheme()}</Center>
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    <Combobox.Option value="light" key="light">
                        <Center>
                            <Group><IconSun size={20} color={theme.colors.yellow[7]} title='Light'/></Group>
                        </Center>
                    </Combobox.Option>
                    <Combobox.Option value="dark" key="dark">
                        <Center>
                            <Group><IconMoon size={20} color={theme.colors.blue[6]} title='Dark'/></Group>
                        </Center>
                    </Combobox.Option>
                    <Combobox.Option value="auto" key="auto">
                        <Center>
                            <Group><IconBrightnessFilled size={20} title='Auto'/></Group>
                        </Center>
                    </Combobox.Option>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    )
}
