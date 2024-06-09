import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {Platform} from "react-native";
import Constants from '~/common/Constants';

const IonVectorIcon = (props) => {
    return (
        <Ionicons
            name={Platform.OS === 'ios' ? 'ios-' + props.name : 'md-' + props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const OctIcon = (props) => {
    return (
        <Octicons
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const SimpleLineIcon = (props) => {
    return (
        <SimpleLineIcons
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}

const MaterialVectorIcon = (props) => {
    return (
        <MaterialIcons
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}

const MaterialCommunityVectorIcon = (props) => {
    return (
        <MaterialCommunityIcons
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}

const AntDesignVectorIcon = (props) => {
    return (
        <AntDesign
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}

const FontAwesomeVectorIcon = (props) => {
    return (
        <FontAwesome
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const FontAwesome5VectorIcon = (props) => {
    return (
        <FontAwesome5
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const EntypoVectorIcon = (props) => {
    return (
        <Entypo
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const ZocialVectorIcon = (props) => {
    return (
        <Zocial
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const FontistoVectorIcon = (props) => {
    return (
        <Fontisto
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const FeatherVectorIcon = (props) => {
    return (
        <Feather
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const EvilIconsVectorIcon = (props) => {
    return (
        <EvilIcons
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}
const FoundationVectorIcon = (props) => {
    return (
        <Foundation
            name={props.name}
            size={props.size}
            style={props.style ? props.style : {}}
            color={props.color ? props.color : Constants.darkColor}
        />
    );
}

export default {
    IonVectorIcon,
    MaterialVectorIcon,
    MaterialCommunityVectorIcon,
    AntDesignVectorIcon,
    FontAwesomeVectorIcon,
    FontAwesome5VectorIcon,
    SimpleLineIcon,
    OctIcon,
    FeatherVectorIcon,
    EntypoVectorIcon,
    ZocialVectorIcon,
    FontistoVectorIcon,
    EvilIconsVectorIcon,
    FoundationVectorIcon
}
