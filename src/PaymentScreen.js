import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Utils from './Utils';

const {width} = Dimensions.get('window');

const paymentAmounts = [
    {id:1, amount:50, name:'Fifty birr'},
    {id:2, amount:100, name:'One hundred birr'},
    {id:3, amount:500, name:'Five hundred birr'},
    {id:4, amount:1000, name:'One thousand birr'},
    {id:5, amount:5000, name:'Five thousand birr'},
    {id:6, amount:10000, name:'Ten thoudand Birr'},
];

const PaymentScreen = () => {
    const utils = new Utils();
    const [selectedAmount, setSelectedAmount] = useState(null);

    
    return (
        <View style={{flex:1, width:width, marginTop:36, alignItems:'center', justifyContent:'center', paddingHorizontal:5, paddingTop:15}}>
            <Text style={{fontSize:35, fontWeight:'700', color:'#72ACE6'}}>Pay Easy</Text>
            <Text style={{fontSize:16, fontWeight:'300', marginBottom:15, color:'#777'}}>Pay with one click!</Text>

            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'flex-end', marginBottom:15}}>
                <Text style={{fontSize:50, fontWeight:'400'}}>{selectedAmount ? utils.addCommaToNumber(selectedAmount.amount) : '0.00'}</Text>
                <Text style={{fontSize:17, fontWeight:'300', marginLeft:5, marginBottom:10}}>ETB</Text>
            </View>

            <FlatList
                data={paymentAmounts}
                numColumns={2}
                renderItem={(paymentItem) => {
                    const item = paymentItem.item;
                    return (
                        <TouchableOpacity 
                        onPress={() => {
                            // console.log(`Pay: ${item.amount}`);
                            if(selectedAmount?.id===item.id){
                                setSelectedAmount(null);
                            }else{
                                setSelectedAmount(item);
                            }
                        }}
                        activeOpacity={0.5}
                        style={{width:'50%', height:130, paddingHorizontal:10, paddingVertical:10}}>
                            <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', 
                            backgroundColor:(selectedAmount?.id===item.id ? '#fff' : '#eee'), borderRadius:15, borderWidth:2, 
                            borderColor:(selectedAmount?.id===item.id ? '#72ACE6' : '#eee')}}>
                                <Text style={{fontSize:22, fontWeight:'500', marginBottom:2}}>{utils.addCommaToNumber(item.amount)}</Text>
                                <Text style={{fontSize:14, fontWeight:'300', marginBottom:20}}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id}
            />

            <View style={{flexDirection:'row', justifyContent:'center', width:'100%', marginBottom:15}}>
                <TouchableOpacity 
                activeOpacity={0.5}
                style={{paddingHorizontal:20, paddingVertical:10, borderRadius:25, backgroundColor:'#72ACE6'}}>
                    <Text style={{color:'#fff', fontWeight:'300', fontSize:18}}> Pay now </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PaymentScreen;

const styles = StyleSheet.create({})