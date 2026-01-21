import React from "react";
import { View, Pressable } from "react-native";

type Props = React.PropsWithChildren<{
    onPress: () => void,
}>;

export default function Button({ children, onPress }: Props) {
    return (
        <Pressable onPress={onPress}>
            {({ pressed }) => (
                <View style={
                    { backgroundColor: pressed ? 'rgba(0, 0, 0, 0.1)' : 'transparent' }
                }>
                    { children }
                </View>
            )}
        </Pressable>    
    )
}