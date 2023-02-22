
<template>
    <div>
        <video-player :options="videoOptions"/>
    </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import 'video.js/dist/video-js.css';

export default {
    name: "VideoExample",
    components: {
        VideoPlayer
    },
    data() {
        return {
            videoOptions: {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src: "/assets/gacha001effect.mp4",
                        type: "video/mp4"
                    }
                ]
            }
        };
    }
};

</script>