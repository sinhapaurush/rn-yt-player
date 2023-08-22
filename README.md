# React Native YouTube Video Player 🔥
This is a plugin for React Native making playing YouTube video in React Native without pain.

It includes almost everything a developer needs to do with a YouTube video in his/her app.

Developers can easily modify the player according to their app (till an extent), and choose options they want to show in YouTube player.

## Installation
```bash
npm install rn-yt-player
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
        videoSource="EMjMSxYpXtw"
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
![Output](https://lh3.googleusercontent.com/fife/AKsag4PMykNLXeQTRn_rgfgF0eIHeFO2rL3L7XxoWn4EIlx7Ou7poNT1ibJhBFrlSej_-T_uRiyNYPFl3JPmAvAsoZW9ZwTVGgadvACHhkHyfLa-SEJaDdjBiDGMVmO9pMiZbbpbLyyxQI148naCGWLFD_524r7gNi68ShoDiMCNsEVUWEoB_I0RTaWPDTqtDoBohgpia0PkF_9WVFSCjyJGPnU3BriSLjItPQS6pnJEr4bRcZspvaOaoIbufXEpkDy0pB6kKTLI7I5SOGDWPZSRadDJjgDHDeJELn3OWQtuFRddB8n_l35uodcJtRO0PaLIjqkXx5SDp7ORTgRren-7J17Gg7kI1d-iNCIerPK9yGTlcGD5_MDC0PSonZJkfjoPlPjwr2lippG31b434pUtTkDbQnmBU3anyP8Kk9dARw5lKRflfMR7YdVfTm8GHagBNO939xVNrFF-c24Fpho9JVwsoxGHA62O8vTh5H3kW_MQJ_u15kMxZhfXsKv-OeYGOQSufIPzFuykRsmgBNL3aLFVCTJtWoHbKsm4vyV05FdIXCx9H46d0zqgB3xkWAUuzGl0WIhvBwaIDYgxmztAnkmgH0BC2RRH5o3FfLSBHA8xzPEuFhshMMAYXOW7QOK9AOPdVxKfSYd0yZYHuLNrEukKDJ9AZvGnP2r_oZmjJ6hotJRLr_TZorpGyCYTLhgh-9U-w96c6wZGq-CYRbahcDc9umRA6xdKO_kvTEgadbMltUdG6HorJxK3Z9bVoOISRkoIu6xGiSOGHUHJIu-Tnj2Hn3hgaj6rexJeczD3sPSisWaoj0-IOXnFvGLPCkdlEFJA6Pf8qsxufI8D3BOAR8x1dW6Uu_g7Fz2tzCyj8oMcDlqGqu78dsGP32qxS7ojW_KVgp2uqN3Grez7v7S4qo1aawWBujtdDrarCeW68IumY6LHxhUsUIMrXNmAKwOA4VqZB0J5tJvENnjPk18Z_RVQjV_K-I5L1NyOXrWRDKmuqMkFhqVhO1vnYLMH5hpZTjBqeVdf9B0u_DmaPj-OGrCoedPzAgSkeAY8juNnfpGpal0oswyNSDz6NghZfkSoPrD75XEiFB9-5CjJ60PjGlSsHF9ohhqqu7JHrQGDTCo6sHgzHHtBHGaqEMFPMfSwNzG1BJWk5qh8UWkjpxIIGrDyEgIMLz2GtBZZIpNZ8IT9XkJGW_nV7LhzIun824PrB_8UXO_zm1484xd3lM25UrInK2MwIb9uvntnwcYe56jT-ktnnengmdYC16kxyiPwKkoEPNRcldXeXIcMAspGtV3JSb4RvwbtiSbk3OcBp8Cnrg1v4bPsEUvalce0vPMmyZ4DlM7WgX1HMx5mOTgomfqo--u7K1vrOmbC65dX4qIzG1lIOZKCavT3Kz0bfzysJIJLZ_zeyWC4ttfHsT3pTo8MPOxC7x0i1rYmhwT8XB0bdbbpUyl5xyZR4mdHDmaC5OBD5bq8bvjfGZvE3y4v_pBAHd83lKxUxWkRejNM228qU9WjyWn4jDKZegeOnrKULxJjQvjDUVWi_9pestCJRWOfIq4y9o4hvYDeu27EyvT2y4IeYcy9yfcM3AzB5zZMDzlsLvKRQP2OSKvK=w1920-h942)
## Author
- [Paurush Sinha](https://github.com/sinhapaurush/)