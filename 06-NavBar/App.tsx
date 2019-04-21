import { Data, animate, Override, Animatable,} from "framer"
const data = Data({ 
    
    buttonBackgroundScale: Animatable(1),
    buttonBackgroundOpacity: Animatable(0),
    buttonBackgroundScale2: Animatable(1),
    buttonBackgroundOpacity2: Animatable(0),
    buttonBackgroundScale3: Animatable(1),
    buttonBackgroundOpacity3: Animatable(0),
    buttonBackgroundScale4: Animatable(1),
    buttonBackgroundOpacity4: Animatable(0),
    moveUp:Animatable(20),
    textOpacity: Animatable(0),
    
                });

export const text: Override = () => {
    return {
      opacity: data.textOpacity,}}

export const iconBackground: Override = () => {
    return {
        scale: data.buttonBackgroundScale,
        opacity:data.buttonBackgroundOpacity,
        
        async onTap() { 
           
            animate.ease(data.buttonBackgroundOpacity, 0.7, {duration: 0.1});
            animate.ease(data.moveUp,30,{duration: 0.2});
            animate.ease(data.textOpacity, 1, {duration: 0.1});
            await animate.ease(data.buttonBackgroundScale, 3, {duration: 0.1}). finished;
            await animate.ease(data.buttonBackgroundOpacity, 0, {duration: 0.1}).finished;
            animate.ease(data.buttonBackgroundScale, -3,{duration: 0.1})
            


    }
}}

export const Move: Override = () => {
    return {
      bottom: data.moveUp,}}




export const iconBackground2: Override = () => {
    return {
        scale: data.buttonBackgroundScale2,
        opacity:data.buttonBackgroundOpacity2,
        async onTap() { 
           
            animate.ease(data.buttonBackgroundOpacity2, 0.7, {duration: 0.1});
            animate.ease(data.moveUp,30,{duration: 0.2});
            animate.ease(data.textOpacity, 1, {duration: 0.1});
            await animate.ease(data.buttonBackgroundScale2, 3, {duration: 0.1}). finished;
            await animate.ease(data.buttonBackgroundOpacity2, 0, {duration: 0.1}).finished;
            animate.ease(data.buttonBackgroundScale2, -3,{duration: 0.1})
            


    }
}}

export const iconBackground3: Override = () => {
    return {
        scale: data.buttonBackgroundScale3,
        opacity:data.buttonBackgroundOpacity3,
        async onTap() { 
           
            animate.ease(data.buttonBackgroundOpacity3, 0.7, {duration: 0.1});
            animate.ease(data.moveUp,30,{duration: 0.2});
            animate.ease(data.textOpacity, 1, {duration: 0.1});
            await animate.ease(data.buttonBackgroundScale3, 3, {duration: 0.1}). finished;
            await animate.ease(data.buttonBackgroundOpacity3, 0, {duration: 0.1}).finished;
            animate.ease(data.buttonBackgroundScale3, -3,{duration: 0.1})
            


    }
}}

export const iconBackground4: Override = () => {
    return {
        scale: data.buttonBackgroundScale4,
        opacity:data.buttonBackgroundOpacity4,
        async onTap() { 
           
            animate.ease(data.buttonBackgroundOpacity4, 0.7, {duration: 0.1});
            animate.ease(data.moveUp,30,{duration: 0.2});
            animate.ease(data.textOpacity, 1, {duration: 0.1});
            await animate.ease(data.buttonBackgroundScale4, 3, {duration: 0.1}). finished;
            await animate.ease(data.buttonBackgroundOpacity4, 0, {duration: 0.1}).finished;
            animate.ease(data.buttonBackgroundScale4, -3,{duration: 0.1})
            


    }
}}
