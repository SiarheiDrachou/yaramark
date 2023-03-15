<template>
    <div class="team-list__item-messagers">
        <a v-for="messager in messagers" :key="messager.type" :href="link(messager)">
            <TelegramLogo v-if="messager.type === 'tg'"/>
            <ViberLogo v-if="messager.type === 'viber'"/>
            <WhatsappLogo v-if="messager.type === 'whatsapp'"/>
        </a>
    </div>
</template>

<script>
    import TelegramLogo from '../../assets/svg/TelegramLogo.vue';
    import ViberLogo from '../../assets/svg/ViberLogo.vue';
    import WhatsappLogo from '../../assets/svg/WhatsappLogo.vue';

    export default {
        components: { TelegramLogo, WhatsappLogo, ViberLogo},
        props: ['messagers'],
        methods: {
            checkDevice() {
                let MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;

                let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(MobileUserAgent.toLowerCase());
                
                if (MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i) && !isTablet) {
                   return 'iOS';
                } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
                    return 'Android';
                } else {
                    return 'Desktop';
                }
            },
            link(messager) {
                if(messager.type === 'viber') {
                    return this.checkDevice() === 'iOS' || this.checkDevice() === 'Android' ? `https://msng.link/o/?${messager.number}=vi` : `viber://chat?number=%2B${messager.number}`
                }
                if(messager.type === 'tg') {
                    return `https://telegram.im/${messager.number}`
                }
                if(messager.type === 'whatsapp') {
                    return `https://wa.me/${messager.number}`
                }
                return null
            },
        },
        mounted() {
            console.log(this.messagers);
        }
        
    }
</script>