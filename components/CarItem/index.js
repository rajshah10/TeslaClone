import React, { useState } from 'react'
import { View,Text,ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './style'
export default function CarItem(props) {
    const {name,tagline,image,taglineCTA}=props.car
    return (
       
           <View style={styles.carContainer}>
                <ImageBackground
                    source={image} style={styles.image}
                >      
                </ImageBackground>
               <View style={styles.titles}>
                         <Text style={styles.title}>{name}</Text>
                         <Text style={styles.subtitle}>{tagline}
                            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                         </Text>
               </View>
                <View  style={styles.buttonContainer}>
                    <StyledButton 
                        type="primary"
                        content="Custom Order"
                        onPress={()=>{
                        }}
                    />
                    <StyledButton 
                        type="secondary"
                        content="Existing Inventory"
                        onPress={()=>{
                        }}
                    />
                </View>
            </View>
 
    )
}
