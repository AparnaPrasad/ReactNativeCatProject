import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useWidthHeight = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        setScreenWidth(Dimensions.get('window').width);
        setScreenHeight(Dimensions.get('window').height); 
    });

    return { screenWidth, screenHeight };
}

export default useWidthHeight;