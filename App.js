import React from "react";
import TelaInicio from './telas/TelaInicio/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaTabuada from "./telas/TelaTabuada/index";
import TelaRespostaCorreta from "./telas/TelaRespostaCorreta/index";
import TelaRespostaErrada from "./telas/TelaRespostaErrada/index";

const Navegacao = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Navegacao.Navigator screenOptions={{ headerShown: false }}>
      <Navegacao.Screen name="Inicio" component = { TelaInicio } />
      <Navegacao.Screen name="Tabuada" component = { TelaTabuada } />
      <Navegacao.Screen name="RespostaCorreta" component = { TelaRespostaCorreta } />
      <Navegacao.Screen name="RespostaErrada" component = { TelaRespostaErrada } />  
    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;