import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    addRotation:Animatable(0),
    menueRotation:Animatable(180),
    menueOpacity:Animatable(0),
    iconEachRotation: Animatable(-20),
    addScale: Animatable(1),
    addMoveUp: Animatable(10),
    backgroundMenuScale: Animatable(1),
    backgroundMenuOpacity: Animatable(0),
    backgroundScale: Animatable(1),
    backgroundMoveUp: Animatable(10),
 })

let toggle = false;
const springOptions = {
    tension: 300,
    friction: 20
}

export const circleButton: Override = () => {
    return {
        scale: data.addScale,
        bottom: data.addMoveUp,
        
        onTap() {
            let addScaleValue = toggle? 1 : 1.4;
            let addMoveupValue = toggle? 10 : 50;
            let addRotationValue = toggle? 0 : 45;
            let backgroundMenuOpacityValue = toggle? 0 : 1;
            let menueRotationValue = toggle? 180 : 1;
            let backgroundMenuScaleValue = toggle? 1 : 4;
            let iconEachRotationValue = toggle? -20 : 0;
            let menueOpacityValue = toggle? 0 : 1;
            let backgroundMoveupValue = toggle? 10 : 44;
            let backgroundScaleValue = toggle? 1 : 30;
            animate.spring(data.addScale, addScaleValue, springOptions)
            animate.ease(data.addMoveUp, addMoveupValue, {duration: 0.2})
            animate.ease(data.backgroundMoveUp, backgroundMoveupValue, {duration: 0.2})
            animate.ease(data.addRotation, addRotationValue, {duration: 0.5}) 
            animate.ease(data.backgroundScale, backgroundScaleValue, {duration: 0.7})
    
            setTimeout(()=>{
                animate.ease(data.backgroundMenuOpacity, backgroundMenuOpacityValue, {duration: 0.3})
                animate.ease(data.menueRotation, menueRotationValue, {duration: 0.5})
                animate.ease(data.backgroundMenuScale, backgroundMenuScaleValue, {duration: 0.3})
                animate.ease(data.iconEachRotation,iconEachRotationValue, {duration: 0.5})
                animate.ease(data.menueOpacity, menueOpacityValue, {duration: 0.3})
            }, 100)
            toggle = !toggle;
        }
    }
}

export const circleBackground: Override = () => {
    return {
        scale: data.backgroundMenuScale,
        opacity: data.backgroundMenuOpacity,
    }
}

export const iconAnimation: Override = () => {
    return {
        rotation: data.iconEachRotation
    }
}

export const addAnimation: Override = () => {
    return {
        bottom:data.addMoveUp,
        scale:data.addScale,
        rotation: data.addRotation
    }
}
export const circleMenu: Override = () => {
    return {
        rotation: data.menueRotation,
        opacity: data.menueOpacity,
        
    }
}
export const background: Override = () => {
    return {
        bottom:data.backgroundMoveUp,
        scale: data.backgroundScale,
    }
}