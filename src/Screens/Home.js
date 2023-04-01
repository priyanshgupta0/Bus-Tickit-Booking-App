import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Dimensions, Modal, FlatList, Button, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles/styles";

const mobileW = Dimensions.get("screen").width;


const HomeScreen = ({ route }) => {

    navigator = useNavigation();
    const [Check, setCheck] = useState(false);
    const [num, setnum] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [initial, setinitial] = useState([
        {
            id: '1',
            name: 'S1',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '2',
            name: 'S2',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '3',
            name: 'S3',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '4',
            name: 'S4',
            book: false,
            gen: null,
            Detail:{
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '5',
            name: 'S5',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '6',
            name: 'S6',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '7',
            name: 'S7',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '8',
            name: 'S8',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '9',
            name: 'S9',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '10',
            name: 'S10',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '11',
            name: 'S11',
            book: false,
            gen: null,
            Detail:{
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
        {
            id: '12',
            name: 'S12',
            book: false,
            gen: null,
            Detail: {
                PName: null,
                PGen: null,
                PAge: null,
            },
        },
    ])

    const CancleBooking = () => {
        initial[index].gen = null;
        initial[index].book = !initial[index].book;
        initial[index].Detail.PName = null;
        initial[index].Detail.PGen = null;
        initial[index].Detail.PAge = null;
        num.push(index);
    }

    useEffect(() => {
        if (Check) {
            setinitial(route.params?.Seats)
            setnum(route.params?.ran_1)
        }
    }, [])

    const Book = () => {
        console.log(initial);
        if (Check) {
            if (route.params?.ran_1.length > 0) {
                navigator.navigate('PassengerForm', { data: initial, ran: num });
                setCheck(true)
            } else {
                alert('All seats are booked')
            }
        } else {
            navigator.navigate('PassengerForm', { data: initial, ran: num });
            setCheck(true)

        }
        // if (num.length > 0) {
        //     navigator.navigate('PassengerForm');
        //     let a = random_item(num);
        //     let b = num.indexOf(a);
        //     console.log(num);
        //     console.log(b);
        //     num.splice(b, 1);
        //     setnum([...num]);
        //     console.log(num);
        //     Seat[a].book = !Seat[a].book;
        //     var UpdatedSeats = Seat;
        //     console.log(Seat[b])
        //     setSeat([...UpdatedSeats]);
        //     // setBooked(!Booked)
        // } else {
        //     alert('All seats are booked')
        // }
    }

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: mobileW * .05,
                }}
            />
        );
    }

    const RenderSeat = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.book) {
                        setIndex(item.id - 1);
                        setShowModal(!showModal);
                        console.log(index);
                    }
                }}
                style={[styles.Seat, { backgroundColor: item.book ? item.gen ? 'grey' : 'pink' : 'white' }]} >

                <Text style={styles.SeatText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.TextStyle}>Select A Seat</Text>
            <View style={{ alignItems: "center" }}>
                <FlatList
                    data={initial}
                    renderItem={RenderSeat}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    numColumns={3}
                    columnWrapperStyle={{}}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => {
                        console.log('Modal has been closed.');
                    }}>
                    <View>
                        <Text style={styles.TextStyle}>Modal is open!</Text>
                        <Text style={styles.TextStyle}>Passenger Name : {initial[index].Detail.PName}</Text>
                        <Text style={styles.TextStyle}>Passenger Age : {initial[index].Detail.PAge}</Text>
                        <Text style={styles.TextStyle}>Passenger Gender : {initial[index].Detail.PGen}</Text>
                        <TouchableOpacity
                            style={[styles.button, { width: mobileW * .4, backgroundColor: 'red' }]}
                            onPress={() => {
                                CancleBooking();
                                setShowModal(!showModal);
                            }}
                        >
                            <Text style={styles.buttonText}>Cancle Booking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setShowModal(!showModal);
                            }}
                        >
                            <Text style={styles.buttonText}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { Book() }}>
                <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


export default HomeScreen;