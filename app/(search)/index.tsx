import { Search } from '@/components/Pesticides/components/Search';
import { View } from 'react-native';

export default function Index() {
  return (
    <View style={{ backgroundColor: "#25292e", flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
      <Search />
    </View>
  );
}