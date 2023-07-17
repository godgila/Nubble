import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button loading title="Outline" marginBottom="s12" preset="primary" />
          <Button disabled title="Prdsdsdimary" marginBottom="s12" />
          <Button
            title="Secondary"
            marginBottom="s12"
            preset="outline"
            disabled
          />
          <Button preset="outline" title="Titulo" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
