import React from "react";
import ClassCounter from "./components/ClassCounter";
import ContextComponentOne from "./components/ContextA";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookDataFetching from "./components/HookDataFetching";
import HookIntervalCounter from "./components/HookIntervalCounter";
import HookMouse from "./components/HookMouse";
import HookMouseContainer from "./components/HookMouseContainer";
import UseEffectCounterOne from "./components/UseEffectCounterOne";
import ContextC from "./components/ContextC";
import ContextB from "./components/ContextB";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <>
       <userContext.Provider value={"Pal"} >
    <channelContext.Provider value={"Pal's channel"} >
    <ContextB />
    </channelContext.Provider>
   </userContext.Provider>
   <userContext.Provider value={"Pal"} >
    <channelContext.Provider value={"Pal's channel"} >
    <ContextC  />
    </channelContext.Provider>
   </userContext.Provider>
    {/* <HookDataFetching /> */}
    {/* <HookIntervalCounter /> */}
  {/* <HookMouseContainer /> */}
    {/* <HookMouse /> */}
    {/* <UseEffectCounterOne /> */}
    {/* <HookCounterFour /> */}
    {/* <HookCounterThree /> */}
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <HookCounterTwo /> */}
    </>
  );
}

export default App;
