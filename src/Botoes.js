import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Botao = () => {
  const [count1, setCountMaisMenos25] = useState(0);
  const [count2, setCountVezes2] = useState(2);


  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, justifyContent: 'space-around' }}>
        <>
          <Text style={{ fontSize: 35 }}> {count1} </Text>
          <Button
            title=" + "
            onPress={() => setCountMaisMenos25(count1 + 25)}
            color="#073B4F"
          />
          <Text></Text>
          <Button
            title=" - "
            onPress={() => setCountMaisMenos25(count1 - 25)}
            color="#073B4F"
          />
        </>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, justifyContent: 'space-around' }}>
        <>
          <Text style={{ fontSize: 35 }}> {count2} </Text>
          <Button
            title=" + "
            onPress={() => setCountVezes2((count2 * 2))}
            color="#073B4F"
          />
          <Text></Text>
          <Button
            title=" - "
            onPress={() => setCountVezes2(count2 / 2)}
            color="#073B4F"
          />
        </>
      </View>
    </View>
  );
};

export { Botao };
