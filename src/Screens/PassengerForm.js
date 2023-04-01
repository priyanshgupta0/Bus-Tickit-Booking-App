import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../Styles/styles";

const data = [
    { label: 'Select Gender', value: null },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];


const PassengerForm = ({ route }) => {
    navigator = useNavigation();

    const [Name, setName] = useState('');
    const [RName, setRName] = useState('');
    const [Gender, setGender] = useState(null);
    const [RGender, setRGender] = useState('');
    const [Age, setAge] = useState('');
    const [RAge, setRAge] = useState('');
    const [num, setnum] = useState(route.params.ran);
    const [Seat, setSeat] = useState(route.params.data);
    const [test, settest] = useState(false);

    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    const handleBook = () => {
        let nam = Name;
        let Gen = Gender;
        let age = Age;
        if (nam == '') {
            setRName('Name cannot be empty');
        } else {
            setRName('');
        }
        if (Gen == null) {
            setRGender('Please select your Gender');
        } else {
            setRGender('');
        }
        if (age == '') {
            setRAge('Please Enter your Age');
        } else {
            setRAge('');
        }
        if (nam != '' && Gen != null && age != '') {
            setRName('');
            setRGender('');
            setRAge('');
            settest(true);
        }
    }

    useEffect(() => {
        if (test) {
            console.log("Loading...")
            Book();
        }
    })


    const Book = () => {

        if (Gender == 'Female') {
            let count_0 = 0;
            let count_1 = 0;
            let count_2 = 0;
            for (let x = 0; x < num.length; x++) {
                let item = num[x];
                for (let i = 0; i < 12; i = i + 3) {
                    if (i == item) {
                        if (Seat[item + 1].gen == false || Seat[item + 1].book == false) {
                            console.log(item + 1)
                            count_1++;
                        }
                    }
                    if (i == item + 1) {
                        if (Seat[item].gen == false || Seat[item + 1].book == false) {
                            console.log(item)
                            count_2++;
                        }
                    }
                }
                for (let i = 0; i < 10; i = i + 3) {
                    if (i == item) {
                        if (Seat[item].book == false) {
                            console.log(item)
                            count_0++;
                        }
                    }
                }
            }
            let Fcount = count_0 + count_1 + count_2;
            // console.log(Seat);
            let a = random_item(num);
            console.log(a);
            // console.log(a)
            for (let i = 1; i < 12; i = i + 3) {
                if (a === i) {
                    if (Seat[i + 1].gen === false) {
                        // console.log("inside 2 5 8 11")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = false;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                    else if (Seat[i + 1].gen === null) {
                        // console.log("inside 2 5 8 11")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = false;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                }
                else if (a == i + 1) {

                    if (Seat[i].gen === false) {
                        // console.log("inside 3 6 9 12")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = false;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                    else if (Seat[i].gen === null) {
                        // console.log("inside 3 6 9 12")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = false;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                }
            }
            for (let i = 0; i < 10; i = i + 3) {
                // console.log(i)
                if (a === i) {
                    if (Seat[i].gen === null) {
                        // console.log("inside 1 4 7 10")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = false;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                }
            }
            if (Fcount > 0) {
                return Book();
            } else {
                alert('Seats are not available for Female');
                navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                return 0;
            }
        }
        else if (Gender == 'Male') {
            let count_0 = 0;
            let count_1 = 0;
            let count_2 = 0;
            for (let x = 0; x < num.length; x++) {
                let item = num[x];
                for (let i = 0; i < 12; i = i + 3) {
                    if (i == item) {
                        if (Seat[item + 1].gen == true || Seat[item + 1].book == false) {
                            console.log(item + 1)
                            count_1++;
                        }
                    }
                    if (i == item + 1) {
                        if (Seat[item].gen == true || Seat[item + 1].book == false) {
                            console.log(item)
                            count_2++;
                        }
                    }
                }
                for (let i = 0; i < 10; i = i + 3) {
                    if (i == item) {
                        if (Seat[item].book == false) {
                            console.log(item)
                            count_0++;
                        }
                    }
                }
            }
            let Mcount = count_0 + count_1 + count_2;
            // console.log(Seat);
            let a = random_item(num);
            // console.log(a)
            console.log(a);
            for (let i = 1; i < 12; i = i + 3) {
                if (a === i) {
                    if (Seat[i + 1].gen === true) {
                        // console.log("inside 2 5 8 11")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = true;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                    else if (Seat[i + 1].gen === null) {
                        // console.log("inside 2 5 8 11")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = true;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                }
                else if (a == i + 1) {

                    if (Seat[i].gen === true) {
                        // console.log("inside 3 6 9 12")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = true;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                    else if (Seat[i].gen === null) {
                        // console.log("inside 3 6 9 12")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = true;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                }
                // console.log(i)
                // console.log(i + 1)

            }
            for (let i = 0; i < 10; i = i + 3) {
                // console.log(i)
                if (a === i) {
                    if (Seat[i].gen === null) {
                        // console.log("inside 1 4 7 10")
                        let b = num.indexOf(a);
                        num.splice(b, 1);
                        setnum([...num]);
                        Seat[a].gen = true;
                        Seat[a].book = !Seat[a].book;
                        Seat[a].Detail.PName = Name;
                        Seat[a].Detail.PGen = Gender;
                        Seat[a].Detail.PAge = Age;
                        var UpdatedSeats = Seat;
                        setSeat([...UpdatedSeats]);
                        navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                        return 0;
                    }
                }
            }
            if (Mcount > 0) {
                return Book();
            } else {
                alert('Seats are not available for Male');
                navigator.navigate('HomePage', { Seats: Seat, ran_1: num });
                return 0;
            }
        }
    }

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.TextStyle}>
                Enter Passenger details
            </Text>
            <TextInput
                color={'black'}
                placeholderTextColor={'black'}
                value={Name}
                onChangeText={(Name) => setName(Name)}
                placeholder={'Enter your Name'}
                style={styles.TextInputStyle} />
            <Text style={[styles.Warning]}>{RName}</Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={{ color: 'black' }}
                placeholderTextColor={{ color: 'black' }}
                selectedTextStyle={{ color: 'black' }}
                itemTextStyle={{ color: 'black' }}
                placeholder='Select Gender'
                data={data}
                labelField="label"
                valueField="Gender"
                value={Gender}
                onChange={item => {
                    setGender(item.value);
                    // console.log(Gender)
                }}

            />
            <Text style={[styles.Warning]}>{RGender}</Text>
            <TextInput
                color={'black'}
                placeholderTextColor={'black'}
                value={Age}
                onChangeText={(Age) => setAge(Age)}
                placeholder={'Enter your Age'}
                style={styles.TextInputStyle}
                keyboardType='numeric'
                maxLength={3}
            />
            <Text style={[styles.Warning]}>{RAge}</Text>
            <TouchableOpacity style={styles.button} onPress={() => { handleBook(); }}>
                <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default PassengerForm;