import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';

import { Wrapper, Container, Main } from './styles';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}
const Following: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followerd Categories</Title>,
        isTitle: true
      },
      {
        key: 'C1',
        render: () => <CategoryList />
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true
      },
      {
        key: 'C2',
        render: () => <StreamList />
      },
      {
        key: 'CONTINUE_WATCH',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true
      },
      {
        key: 'C3',
        render: () => <View />
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true
      },
      {
        key: 'C4',
        render: () => <ChannelList />
      },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header></Header>
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
