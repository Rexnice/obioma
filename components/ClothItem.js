import {StyleSheet,Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const ClothItems = ()=>{
    const designType = [
        {
            id:'1',
            image:'https://asoebiguest.com/wp-content/uploads/2023/05/asoebiguest.com-appealing-embroidery-design-patterns-for-senator-wears-2023-487x600.jpg',
            name:'Senators',
        },
        {
            id:'2',
            image:'https://image.made-in-china.com/2f0j00sbtoTfEKqkcQ/2023-Latest-Men-s-Suit-Designs-Wholesale-Wedding-Bespoke-Tuxedo-Men-Suits.jpg',
            name:'Suits'
        },
        {
            id:'3',
            image:'https://www.siaoryne.com/cdn/shop/products/HTB1pWH8aVT7gK0jSZFpq6yTkpXab-4-red_800x.jpg?v=1579673924',
            name: 'Gowns'
        },
        {
            id:'4',
            image:'https://cdn.sellox.app/preview/AB4FbpobD4NFDJudqbrW%2Fproducts%2F1694602849358_DSC07197-scaled.jpg?auto=compress&fit=crop&w=700&h=950',
            name:'Ankara'
        }
    ]
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {designType.map((item, index) => {
                    <View style={{margin:10 }} key={index}>
                        <Image source={{uri:item.image}} style={{width:60, borderRadius:30}}/>
                        <Text style={{marginTop:6, textAlign:'center'}}>{item.name}</Text>
                    </View>
                })}
            </ScrollView>
        </View>
    )
}

export default ClothItems;

const styles = StyleSheet.create({})