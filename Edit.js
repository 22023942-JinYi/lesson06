import React from 'react';
import { StatusBar, TextInput, Button, StyleSheet, Text, View, Alert} from 'react-native';
import { datasource } from "./Data";


const styles = StyleSheet.create({
    textStyle: {
        borderWidth: 1
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop:5,
    },
    buttonStyle: {
        flex: 1,
        margin: 10
    }
})


const Edit = ({navigation, route}) => {
    const [letter, setLetter] = React.useState(route.params.key);
    return (

        <View>

            <Text>Letter :< /Text>
            <TextInput value={letter}
                       maxLength={1} style={{borderWidth: 1}}
                       onChangeText={(text) => setLetter(text)}/>
            <View style={{flexDirection: "row"}}>
                <View style={{margin: 10, flex: 1}}>
                    <Button title='Save'
                            onPress={ ()=> {
                                let indexnum = 1
                                if (route.params.type == "Vowels") {
                                    indexnum = 0;
                                }
                                datasource[indexnum].data[route.params.index].key = letter;
                                navigation.navigate("Home")
                            }}
                    />

                </View>
                <View style={{margin: 10, flex: 1}}>
                    <Button title='Delete'
                            onPress={ ()=>{
                                let indexnum = 1
                                if(route. params. type == "Vowels") {
                                    indexnum = 0;
                                }
                                Alert.alert("Are you sure?",'',
                                    [{text: 'Yes', onPress: ( )=> {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home")
                                        }},
                                            {text: 'No' } ])

                            }}
                    />

                </View>

            </View>
        </View>
    )
};

export default Edit;