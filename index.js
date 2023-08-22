import React, { useRef, useState, memo } from 'react';
import WebView from 'react-native-webview';
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

const YouTubePlayer = memo(
    ({
        accentColor,
        videoSource,
        startVideoFrom,
        innerPlayButtonColor,
        playButtonColor,
        hideYTLogo,
        hideTopBar,
        hideSettingButton,
        hideCaptionButton,
        hideControls,
        width,
        height,
        children,
        loaderContainerStyle,
    }) => {
        const [videoLoaded, setVideoLoaded] = useState(false);
        const themeColor = accentColor || '#FFFFFF';
        const webRef = useRef(null);
        const startDuration = String(startVideoFrom || 0);
        width = width || '100%';
        height = height || 200;
        const PLAYER_DIMMENSIONS = { width: width, height: height };
        const LOADER_OVERLAYER_STYLE = { marginTop: -1 * height };
        let vidId = '';
        if (videoSource.indexOf('youtu.be') !== -1) {
            vidId = videoSource.split('.be/')[1];
        } else if (videoSource.indexOf('/embed/') !== -1) {
            vidId = videoSource.split('/embed/')[1];
        } else if (videoSource.indexOf('?v=') !== -1) {
            vidId = videoSource.split('&')[0];
            vidId = vidId.split('?v=')[1];
        } else {
            vidId = videoSource;
        }

        const YT_URL = `https://www.youtube.com/embed/${vidId || 'YIU-7ZesjTU'
            }?start=${startDuration}`;
        function removeBranding() {
            const JAVASCRIPT_TO_BE_EXECUTED = `
      ${hideTopBar === true
                    ? `document.querySelector(".ytp-chrome-top").remove();`
                    : ``
                }
      document.querySelector(".ytp-gradient-top").remove();
      ${hideYTLogo === true
                    ? `document.querySelectorAll("a").forEach(element=>element.remove());`
                    : ``
                }
      ${hideControls
                    ? `document.querySelector(".ytp-chrome-bottom").remove();document.querySelector(".ytp-gradient-bottom").remove();`
                    : ``
                }
      const style = document.createElement('style');
      style.innerHTML = \`${hideControls
                    ? `.ytp-chrome-bottom, .ytp-gradient-bottom{display:none!important;}`
                    : ``
                }${hideCaptionButton
                    ? `.ytp-subtitles-button{display:none!important;}`
                    : ``
                }${hideSettingButton ? `.ytp-settings-button{display:none!important;}` : ``
                }${hideTopBar === true
                    ? `.ytp-show-cards-title{display:none!important;}`
                    : ``
                }.ytp-gradient-bottom{background-color: #1e1e1e!important;background-image:unset!important;height:35px!important;opacity:0.9!important;}.ytp-gradient-top, .ytp-gradient-bottom{background-image:unset!important;}.ytp-progress-linear-live-buffer, .ytp-swatch-background-color{background:${themeColor}!important;}.iv-branding{display:none!important}.ytp-menuitem:nth-child(1),.ytp-menuitem:nth-child(4){display:none!important;}.ytp-pause-overlay-container{display:none!important;}.ytp-ce-element{display:none!important}.ytp-videowall-still{display:none!important;}\`;
      document.querySelector("body").appendChild(style);
      document.querySelector(".ytp-large-play-button").innerHTML = \`<svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="26" width="39" height="48" fill="${innerPlayButtonColor || '#FFFFFF'
                }"/><path d="M49.5 8.25C26.73 8.25 8.25 26.73 8.25 49.5C8.25 72.27 26.73 90.75 49.5 90.75C72.27 90.75 90.75 72.27 90.75 49.5C90.75 26.73 72.27 8.25 49.5 8.25ZM41.25 63.9375V35.0625C41.25 33.3713 43.1888 32.3813 44.55 33.4125L63.8138 47.85C64.9275 48.675 64.9275 50.325 63.8138 51.15L44.55 65.5875C43.1888 66.6187 41.25 65.6287 41.25 63.9375Z" fill="${playButtonColor || accentColor || '#000000'
                }"/></svg>\`;
      window.ReactNativeWebView.postMessage(200);
    `;
            webRef.current.injectJavaScript(JAVASCRIPT_TO_BE_EXECUTED);
        }
        function handleMessage(event) {
            const response = parseInt(event.nativeEvent.data);
            if (response === 200) {
                setVideoLoaded(true);
            }
        }
        function checkProgress(r) {
            if (videoLoaded === true) {
                setVideoLoaded(false);
            }
            let nextUrl = r.nativeEvent.url.replaceAll('https://', '');
            nextUrl = nextUrl.replaceAll('http://', '');
            nextUrl = nextUrl.split('?')[0];
            nextUrl = nextUrl.split('/')[1];
            if (nextUrl !== 'embed') {
                webRef.current.stopLoading();
                webRef.current.goBack();
            }
        }
        return (
            <>
                <WebView
                    ref={webRef}
                    source={{ uri: YT_URL }}
                    style={PLAYER_DIMMENSIONS}
                    onLoadEnd={removeBranding}
                    onLoadStart={checkProgress}
                    onMessage={handleMessage}
                    allowsFullscreenVideo={true}
                    setBuiltInZoomControls={false}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
                {!videoLoaded ? (
                    children ? (
                        <View
                            style={[
                                PLAYER_DIMMENSIONS,
                                LOADER_OVERLAYER_STYLE,
                                loaderContainerStyle,
                            ]}>
                            {children}
                        </View>
                    ) : (
                        <View
                            style={[
                                style.overLayer,
                                PLAYER_DIMMENSIONS,
                                LOADER_OVERLAYER_STYLE,
                            ]}>
                            <ActivityIndicator size="large" color={accentColor || 'orange'} />
                        </View>
                    )
                ) : null}
            </>
        );
    },
);
export default YouTubePlayer;
const style = StyleSheet.create({
    overLayer: {
        backgroundColor: '#404040',
        justifyContent: 'center',
    },
});
