import React from 'react'
import styles from "./style"
import { Pressable, Text, View } from "react-native";
const StyledButton = (props) => {
    const type=props.type;
    const backgroundColor=type==="primary"?"white":"#171a20cc";
    const TextColor=type==="primary"?"#171a20cc":"white"
    return (
        <View style={styles.Container}>
                <Pressable
                    style={[styles.button,{backgroundColor: backgroundColor}]}
                    onPress={()=>props.onPress()
                        
                    }
                >
                    <Text style={[styles.Text,{color:TextColor}]}>
                        {props.content}
                    </Text>
                </Pressable>
        </View>
    )
}

export default StyledButton
