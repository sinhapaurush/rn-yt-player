# React Native YouTube Video Player 🔥
This is a plugin for React Native making playing YouTube video in React Native without pain.

It includes almost everything a developer needs to do with a YouTube video in his/her app.

Developers can easily modify the player according to their app (till an extent), and choose options they want to show in YouTube player.

## Installation
```bash
npm install rn-yt-player react-native-webview
```
Under the hood this package works with [`react-native-webview`](https://www.npmjs.com/package/react-native-webview), ie make sure that it is also installed.
## Usage
Import the package like below
```js
import YouTubePlayer from 'rn-yt-player';
```
then simply use the package like below
```js
<YouTubePlayer
    videoSource={VIDEO_SOURCE}
/>
```
## Props
| S.N.   |      Prop Name      |  Accepted Data Type | Accepted Values | Default | Description |
|:----------|:-------------|:------|:---|:---|:---|
|1|`videoSource`|`string`|Any Youtube Video URL, it can be directly from Browser or sharable link or URL for embeding video provided by YouTube in embed code or it can also be directly Video ID| A Video on Youtube | Provide package the video |
|2|`startVideoFrom`|`number \| string`| Time in seconds | `0` | Used to set initial point of video, ie video will start from this point to timeframe|
|3|`width`|`number \| string`|Width for Video Player|`"100%"`| Sets width to Video Player, also accepts `string` so that you can use percentage relative to parent|
|4|`height`|`number`|Height for Video Player|`200`|Sets height of Video Player. **It don't accept `string`, if you provide it with a string value JavaScript will do something weird.**|
|5|`accentColor`|`string` |`color`| Differs| Sets colour to seek bar, priotied color to these if these are unset: Initial Play Button|
|6|`innerPlayButtonColor`|`string`|`color`|`#FFFFFF`|Sets colour to interior portion (triangle) in Play Button|
|7|`playButtonColor`|`string`|`color`| If both `innerPlayButtonColor` and `accentColor` are unset then `#000000` else if `playButtonColor` is unset then `accentColor`, if `playButtonColor` is set then it is only priortied.|Sets colour to Play Button (Outer Circle)|
|8|`hideYTLogo`|`boolean`|`true \| false`| `false`|Hides YouTube Logo below seek bar|
|9|`hideTopBar`|`boolean`|`true \| false`|`false`|Hides top bar in YT Video player, ie it hides Channel Profile Picture, Video Title, copy link button, share video button and 3-dots (more) button|
|10|`hideSettingButton`|`boolean`|`true \| false`| `false` | Hides setting button below seek bar|
|11|`hideCaptionButton`|`boolean`|`true \| false`|`false`| Hides caption button below seek bar|
|12|`hideControls`|`boolean`|`true \| false`|`false`|Hides all controls of Video (Seek Bar, Caption Button, Setting Button, Full Screen Button, Volume Button, Play/Pause button below seek bar)|
|13|`children`|`React.Component`|`React.Component`|A default loader|Replaces default loader with your Component until the Video is loaded in Player|
|14|`loaderContainerStyle`|`object`|`style`|`undefined`|It is applied only if you are using custom loader by providing one into `children` prop. It provides access to styling parent component of loader box which covers Video Player until video is loaded. Hence it can be used to tweak background colour for loader|

## Example
- Code
```js
<YouTubePlayer
        videoSource="VIDEO SOURCE"
        innerPlayButtonColor="white"
        hideTopBar={true}
        hideCaptionButton={true}
        hideYTLogo={true}
        accentColor={'green'}
        width="80%"
        height={250}
/>
```
- Output
- ![Output](https://github.com/sinhapaurush/rn-yt-player/assets/76876045/7a429540-32ac-48bc-bd80-60f96b80f164)

## Author
- [Paurush Sinha](https://github.com/sinhapaurush/)
