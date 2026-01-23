import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../src/theme";

type Props = {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
    onPress: () => void;
};

export default function FloatingActionsButton({ name, color, onPress }: Props) {
    return (
        <TouchableOpacity style={ styles.main } onPress={ onPress } >
            <Ionicons name={ name } size={ 24 } color={ color } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: theme.colors.bgLight,

        borderRadius: 25,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,

        width: 50,
        height: 50
    }
});