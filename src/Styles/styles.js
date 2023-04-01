import { Dimensions, StyleSheet } from "react-native";


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    dropdown: {
        height: mobileW * 0.13,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: mobileW * .05,
        marginRight: mobileW * .05,
        marginTop: mobileW * .04,
    },
    TextInputStyle: {
        marginTop: mobileW * .04,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: mobileW * .05,
        marginRight: mobileW * .05,
    },
    TextStyle: {
        color: 'black',
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        margin: mobileW * .05
    },
    Container: {
        backgroundColor: 'white',
        height: mobileh,
    },
    button: {
        backgroundColor: 'orange',
        height: mobileW * .1,
        width: mobileW * .2,
        justifyContent: "center",
        alignSelf: "center",
        margin: mobileW * .05,
        borderWidth: 2,
        borderRadius: 5
    },
    buttonText: {
        color: 'black',
        fontWeight: "600",
        alignSelf: "center"
    },
    Seat: {
        height: mobileW * .3,
        width: mobileW * .2,
        // backgroundColor: 'cyan',
        marginLeft: mobileW * .05,
        marginRight: mobileW * .05,
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    Warning: {
        marginTop: mobileW * .01,
        marginLeft: mobileW * .1,
        marginRight: mobileW * .1,
        color: 'red',
        fontSize: mobileW * .03,
        fontWeight: '400'
    },
    SeatText: {
        color: 'black',
        fontWeight: "bold",
        alignSelf: "center",
    }
})

export default styles;