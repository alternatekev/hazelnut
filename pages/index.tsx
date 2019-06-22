import React from "react";
import { Page, VideoLoader, MapLoader, ImageLoader, Layout } from '../c/'

const HelloWorld: React.FC = (props) => {
  return (
    <Page title="Video Mapper">
      <Layout>
        <VideoLoader />
        <MapLoader />
        <ImageLoader />
      </Layout>
    </Page>
  )
}

export default HelloWorld;
