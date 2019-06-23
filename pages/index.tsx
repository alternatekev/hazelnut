import React from "react";
import { Page, LoaderCard, Loaders, Layout, VideoCanvas } from '../c/'

const HelloWorld: React.FC = (props) => {
  return (
    <Page title="Video Mapper">
      <Layout noGutter>
        <LoaderCard kind={Loaders.Video} />
        <LoaderCard kind={Loaders.Map} />
        <LoaderCard kind={Loaders.Image} />
      </Layout>
      <VideoCanvas />
    </Page>
  )
}

export default HelloWorld;
