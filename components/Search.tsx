import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../src/theme/index';

type Props = {
    onPress: () => void;
};

export default function Search({ onPress }: Props) {
    return (
        <TouchableOpacity onPress={ onPress } >
            <Ionicons name="search" size={ 24 } color={ theme.colors.onPrimary } />
        </TouchableOpacity>
    )
}