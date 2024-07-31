import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '58c89e2a47d449e79f09a4b2f91941ba',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '이동혁 개발 홈페이지',
  domain: 'hyuk.dev',
  author: 'hyuk-dev',

  // open graph metadata (optional)
  description: '이동혁 개발 홈페이지',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'hyuk-dev',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc635c68d-1ffa-42cc-9172-530738bf8a2c%2F2e249f3f-94b7-4d3e-afe8-d37d4e29a406%2F1000010081.png?table=block&id=58c89e2a-47d4-49e7-9f09-a4b2f91941ba&spaceId=c635c68d-1ffa-42cc-9172-530738bf8a2c&width=250&userId=027bdb46-ca39-49b9-aeb6-b946e88bbe20&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '블로그',
      pageId: '12b1d3ec8aab4778b83a4e7b6ade923c',
    },
    {
      title: '블로그',
      pageId: '12b1d3ec8aab4778b83a4e7b6ade923c',
      menuPage: true,
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: false,
});
