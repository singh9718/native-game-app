import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {

    function presshandler() {
        console.log('pressed')
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={presshandler} android_ripple={{ color: '#640233' }} style={styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({

    buttonOuterContainer:{
        borderRadius:15,
        margin:4,
        overflow:'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    }

});

export default PrimaryButton;